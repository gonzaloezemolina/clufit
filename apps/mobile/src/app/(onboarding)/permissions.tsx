import { router } from 'expo-router';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Text, View } from 'react-native';

import { OnboardingStep } from '@/components/onboarding-step';
import { OptionButton } from '@/components/option-button';
import { useUserId } from '@/hooks/use-profile';
import { supabase } from '@/lib/supabase';

const PERMISSIONS = [
  { provider: 'apple_health', label: 'Apple Health' },
  { provider: 'apple_watch', label: 'Apple Watch' },
  { provider: 'screen_time', label: 'Screen Time' },
];

export default function Permissions() {
  const [enabled, setEnabled] = useState<Set<string>>(new Set());
  const userId = useUserId();

  // Only records the user's choice for now — actually requesting HealthKit /
  // Screen Time access requires native entitlements tied to a paid Apple
  // Developer account, which is intentionally deferred (see conversation
  // history). Wire the real permission prompts here once that account exists.
  const connectIntegrations = useMutation({
    mutationFn: async () => {
      if (enabled.size === 0) return;
      const rows = Array.from(enabled).map((provider) => ({
        user_id: userId!,
        provider,
        status: 'connected' as const,
        last_sync: new Date().toISOString(),
      }));
      const { error } = await supabase.from('integrations').upsert(rows);
      if (error) throw error;
    },
  });

  function toggle(provider: string) {
    setEnabled((current) => {
      const next = new Set(current);
      if (next.has(provider)) next.delete(provider);
      else next.add(provider);
      return next;
    });
  }

  async function handleContinue() {
    await connectIntegrations.mutateAsync();
    router.push('/(onboarding)/partner');
  }

  return (
    <OnboardingStep
      title="Connect your data"
      onContinue={handleContinue}
      isSubmitting={connectIntegrations.isPending}>
      <Text className="text-text-secondary">
        Argus uses this information to understand your context, detect patterns and provide better
        insights. Your data is never used to control your device.
      </Text>

      <View className="gap-2">
        {PERMISSIONS.map((p) => (
          <OptionButton
            key={p.provider}
            label={p.label}
            selected={enabled.has(p.provider)}
            onPress={() => toggle(p.provider)}
          />
        ))}
      </View>
    </OnboardingStep>
  );
}
