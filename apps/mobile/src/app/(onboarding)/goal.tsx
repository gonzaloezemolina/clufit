import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { OnboardingStep } from '@/components/onboarding-step';
import { OptionButton } from '@/components/option-button';
import { useCreateMainGoal } from '@/hooks/use-goals';

const GOAL_OPTIONS: { label: string; category: string }[] = [
  { label: 'Build Muscle', category: 'Fitness' },
  { label: 'Lose Weight', category: 'Fitness' },
  { label: 'Improve Health', category: 'Salud' },
  { label: 'Become More Productive', category: 'Productividad' },
  { label: 'Stay Consistent', category: 'Personal' },
  { label: 'Sleep Better', category: 'Salud' },
  { label: 'Create My Own', category: 'Personal' },
];

export default function Goal() {
  const [selected, setSelected] = useState<string | null>(null);
  const [customTitle, setCustomTitle] = useState('');
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const createMainGoal = useCreateMainGoal();

  const option = GOAL_OPTIONS.find((o) => o.label === selected);
  const isCustom = selected === 'Create My Own';
  const title = isCustom ? customTitle : selected;
  const canContinue = !!title && !!targetDate;

  async function handleContinue() {
    await createMainGoal.mutateAsync({
      title: title!,
      category: option!.category,
      targetDate: targetDate!.toISOString().slice(0, 10),
    });
    router.push('/(onboarding)/lifestyle');
  }

  return (
    <OnboardingStep
      title="What's your main goal?"
      onContinue={handleContinue}
      ctaDisabled={!canContinue}
      isSubmitting={createMainGoal.isPending}>
      <View className="flex-row flex-wrap gap-2">
        {GOAL_OPTIONS.map((o) => (
          <OptionButton
            key={o.label}
            label={o.label}
            selected={selected === o.label}
            onPress={() => setSelected(o.label)}
          />
        ))}
      </View>

      {isCustom && (
        <TextInput
          className="rounded-md border border-accent bg-surface px-4 py-3 text-text-primary"
          placeholder="Name your goal"
          value={customTitle}
          onChangeText={setCustomTitle}
        />
      )}

      {selected && (
        <>
          <Text className="text-text-secondary">When do you want to achieve it?</Text>
          <Pressable
            className="rounded-md border border-accent bg-surface px-4 py-3"
            onPress={() => setShowDatePicker(true)}>
            <Text className={targetDate ? 'text-text-primary' : 'text-text-secondary'}>
              {targetDate ? targetDate.toLocaleDateString() : 'Target date'}
            </Text>
          </Pressable>
          {showDatePicker && (
            <DateTimePicker
              value={targetDate ?? new Date()}
              mode="date"
              minimumDate={new Date()}
              onChange={(_event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setTargetDate(selectedDate);
              }}
            />
          )}
        </>
      )}
    </OnboardingStep>
  );
}
