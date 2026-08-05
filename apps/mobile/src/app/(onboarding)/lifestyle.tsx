import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { OnboardingStep } from '@/components/onboarding-step';
import { OptionButton } from '@/components/option-button';
import { useUpdateProfile } from '@/hooks/use-profile';

const DAYS_PER_WEEK = [0, 1, 2, 3, 4, 5, 6, 7];

function toTimeString(date: Date) {
  return date.toTimeString().slice(0, 8); // "HH:MM:SS", matches Postgres `time`
}

export default function Lifestyle() {
  const [daysPerWeek, setDaysPerWeek] = useState<number | null>(null);
  const [goesToGym, setGoesToGym] = useState<boolean | null>(null);
  const [wakeTime, setWakeTime] = useState<Date | null>(null);
  const [sleepTime, setSleepTime] = useState<Date | null>(null);
  const [activePicker, setActivePicker] = useState<'wake' | 'sleep' | null>(null);

  const updateProfile = useUpdateProfile();

  const canContinue = daysPerWeek !== null && goesToGym !== null && !!wakeTime && !!sleepTime;

  async function handleContinue() {
    await updateProfile.mutateAsync({
      trains_days_per_week: daysPerWeek!,
      goes_to_gym: goesToGym!,
      wake_time: toTimeString(wakeTime!),
      sleep_time: toTimeString(sleepTime!),
    });
    router.push('/(onboarding)/notifications');
  }

  return (
    <OnboardingStep
      title="Your lifestyle"
      subtitle="This helps Argus understand your routine."
      onContinue={handleContinue}
      ctaDisabled={!canContinue}
      isSubmitting={updateProfile.isPending}>
      <Text className="text-text-secondary">How many days do you train each week?</Text>
      <View className="flex-row flex-wrap gap-2">
        {DAYS_PER_WEEK.map((day) => (
          <OptionButton
            key={day}
            label={String(day)}
            selected={daysPerWeek === day}
            onPress={() => setDaysPerWeek(day)}
          />
        ))}
      </View>

      <Text className="text-text-secondary">Do you go to a gym?</Text>
      <View className="flex-row gap-2">
        <OptionButton label="Yes" selected={goesToGym === true} onPress={() => setGoesToGym(true)} />
        <OptionButton label="No" selected={goesToGym === false} onPress={() => setGoesToGym(false)} />
      </View>

      <Text className="text-text-secondary">What time do you usually wake up?</Text>
      <Pressable
        className="rounded-md border border-accent bg-surface px-4 py-3"
        onPress={() => setActivePicker('wake')}>
        <Text className={wakeTime ? 'text-text-primary' : 'text-text-secondary'}>
          {wakeTime ? wakeTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Wake-up time'}
        </Text>
      </Pressable>

      <Text className="text-text-secondary">What time do you usually go to sleep?</Text>
      <Pressable
        className="rounded-md border border-accent bg-surface px-4 py-3"
        onPress={() => setActivePicker('sleep')}>
        <Text className={sleepTime ? 'text-text-primary' : 'text-text-secondary'}>
          {sleepTime
            ? sleepTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : 'Sleep time'}
        </Text>
      </Pressable>

      {activePicker && (
        <DateTimePicker
          value={(activePicker === 'wake' ? wakeTime : sleepTime) ?? new Date()}
          mode="time"
          onChange={(_event, selectedDate) => {
            if (selectedDate) {
              if (activePicker === 'wake') setWakeTime(selectedDate);
              else setSleepTime(selectedDate);
            }
            setActivePicker(null);
          }}
        />
      )}
    </OnboardingStep>
  );
}
