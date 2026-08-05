import type { ReactNode } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OnboardingStepProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  ctaLabel?: string;
  onContinue: () => void;
  ctaDisabled?: boolean;
  isSubmitting?: boolean;
  secondaryAction?: ReactNode;
}

/** Shared shell for every onboarding step (docs/12-onboarding.md): title, content, one CTA. */
export function OnboardingStep({
  title,
  subtitle,
  children,
  ctaLabel = 'Continue',
  onContinue,
  ctaDisabled,
  isSubmitting,
  secondaryAction,
}: OnboardingStepProps) {
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView contentContainerClassName="flex-grow px-6 py-8" keyboardShouldPersistTaps="handled">
        <Text className="mb-2 text-3xl font-bold text-text-primary dark:text-white">{title}</Text>
        {subtitle && <Text className="mb-6 text-text-secondary">{subtitle}</Text>}

        <View className="flex-1 gap-4">{children}</View>

        <Pressable
          className="mt-8 items-center rounded-md bg-primary py-3 disabled:opacity-50"
          disabled={ctaDisabled || isSubmitting}
          onPress={onContinue}>
          {isSubmitting ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="font-semibold text-white">{ctaLabel}</Text>
          )}
        </Pressable>

        {secondaryAction}
      </ScrollView>
    </SafeAreaView>
  );
}
