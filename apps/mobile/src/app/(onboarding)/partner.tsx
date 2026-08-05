import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { OnboardingStep } from '@/components/onboarding-step';

export default function Partner() {
  return (
    <OnboardingStep
      title="Do you train with someone else?"
      subtitle="Invite a friend, partner or gym buddy and grow together. You can invite someone at any time."
      ctaLabel="Skip for now"
      onContinue={() => router.push('/(onboarding)/ready')}
      secondaryAction={
        <View className="mt-3 items-center">
          {/* Synchronization/invite screens (systems/synchronization.md) don't exist yet —
              this just moves on for now instead of pretending to send an invite. */}
          <Pressable onPress={() => router.push('/(onboarding)/ready')}>
            <Text className="text-text-secondary">
              Invite Partner <Text className="text-secondary">(coming soon)</Text>
            </Text>
          </Pressable>
        </View>
      }
    />
  );
}
