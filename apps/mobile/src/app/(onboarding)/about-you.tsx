import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { OnboardingStep } from '@/components/onboarding-step';
import { OptionButton } from '@/components/option-button';
import { useUpdateProfile, useUpdateUser } from '@/hooks/use-profile';

const GENDERS = ['Female', 'Male', 'Other'];

export default function AboutYou() {
  const [firstName, setFirstName] = useState('');
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState<string | null>(null);

  const updateUser = useUpdateUser();
  const updateProfile = useUpdateProfile();

  const isSubmitting = updateUser.isPending || updateProfile.isPending;
  const canContinue = !!firstName && !!birthday && !!height && !!weight;

  async function handleContinue() {
    await updateUser.mutateAsync({
      fullname: firstName,
      birthday: birthday!.toISOString().slice(0, 10),
      ...(gender ? { gender } : {}),
    });
    await updateProfile.mutateAsync({ height: Number(height), weight: Number(weight) });
    router.push('/(onboarding)/goal');
  }

  return (
    <OnboardingStep
      title="About you"
      onContinue={handleContinue}
      ctaDisabled={!canContinue}
      isSubmitting={isSubmitting}>
      <TextInput
        className="rounded-md border border-accent bg-surface px-4 py-3 text-text-primary"
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <Pressable
        className="rounded-md border border-accent bg-surface px-4 py-3"
        onPress={() => setShowDatePicker(true)}>
        <Text className={birthday ? 'text-text-primary' : 'text-text-secondary'}>
          {birthday ? birthday.toLocaleDateString() : 'Birthday'}
        </Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={birthday ?? new Date(2000, 0, 1)}
          mode="date"
          maximumDate={new Date()}
          onChange={(_event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setBirthday(selectedDate);
          }}
        />
      )}

      <TextInput
        className="rounded-md border border-accent bg-surface px-4 py-3 text-text-primary"
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        className="rounded-md border border-accent bg-surface px-4 py-3 text-text-primary"
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Text className="text-text-secondary">Gender (optional)</Text>
      <View className="flex-row flex-wrap gap-2">
        {GENDERS.map((option) => (
          <OptionButton
            key={option}
            label={option}
            selected={gender === option}
            onPress={() => setGender(option === gender ? null : option)}
          />
        ))}
      </View>
    </OnboardingStep>
  );
}
