import { Text } from 'react-native';

import { OnboardingStep } from '@/components/onboarding-step';
import { useUpdateProfile } from '@/hooks/use-profile';

export default function Ready() {
  const updateProfile = useUpdateProfile();

  async function handleFinish() {
    await updateProfile.mutateAsync({ onboarding_completed_at: new Date().toISOString() });
    // No manual navigation: the root Stack's guard flips to (app) as soon as
    // profile.onboarding_completed_at comes back truthy (same pattern as auth).
  }

  return (
    <OnboardingStep
      title="You're all set."
      ctaLabel="Go to Dashboard"
      onContinue={handleFinish}
      isSubmitting={updateProfile.isPending}>
      <Text className="text-text-secondary">
        Your first goal has been created.{'\n'}Argus is now learning your habits.
      </Text>
    </OnboardingStep>
  );
}
