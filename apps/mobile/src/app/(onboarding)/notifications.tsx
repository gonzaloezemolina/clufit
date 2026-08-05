import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import { OnboardingStep } from '@/components/onboarding-step';
import { OptionButton } from '@/components/option-button';
import { useUpdateProfile } from '@/hooks/use-profile';

const NOTIFICATION_TYPES = [
  { key: 'workout_reminders', label: 'Workout Reminders' },
  { key: 'water_reminders', label: 'Water Reminders' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'argus_insights', label: 'Argus Insights' },
  { key: 'partner_activity', label: 'Partner Activity' },
];

export default function Notifications() {
  // All on by default: opting out is the deliberate action, not opting in.
  const [enabled, setEnabled] = useState<Set<string>>(
    new Set(NOTIFICATION_TYPES.map((n) => n.key)),
  );

  const updateProfile = useUpdateProfile();

  function toggle(key: string) {
    setEnabled((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  async function handleContinue() {
    const notification_preferences = Object.fromEntries(
      NOTIFICATION_TYPES.map((n) => [n.key, enabled.has(n.key)]),
    );
    await updateProfile.mutateAsync({ notification_preferences });
    router.push('/(onboarding)/permissions');
  }

  return (
    <OnboardingStep
      title="Stay in the loop"
      subtitle="You can change these anytime from your profile."
      onContinue={handleContinue}
      isSubmitting={updateProfile.isPending}>
      <View className="gap-2">
        {NOTIFICATION_TYPES.map((n) => (
          <OptionButton
            key={n.key}
            label={n.label}
            selected={enabled.has(n.key)}
            onPress={() => toggle(n.key)}
          />
        ))}
      </View>
    </OnboardingStep>
  );
}
