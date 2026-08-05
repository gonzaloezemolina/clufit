import { Pressable, Text } from 'react-native';

interface OptionButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

/** Single-select chip used across onboarding steps (goal, lifestyle yes/no, permissions). */
export function OptionButton({ label, selected, onPress }: OptionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-md border px-4 py-3 ${
        selected ? 'border-primary bg-primary' : 'border-accent bg-surface'
      }`}>
      <Text className={selected ? 'font-semibold text-white' : 'text-text-primary'}>{label}</Text>
    </Pressable>
  );
}
