import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// The 3 intro slides from docs/12-onboarding.md — no data collected here,
// just the value proposition.
const SLIDES = [
  {
    title: 'Build better habits. Together.',
    body: 'Clufit helps you build consistent habits and achieve your goals, alone or with someone else.',
  },
  {
    title: 'Everything in one place.',
    body: 'Track your workouts, recovery, nutrition and productivity with the help of Argus.',
  },
  {
    title: 'Grow together.',
    body: 'Compete with friends, complete challenges and stay consistent every day.',
  },
];

export default function Intro() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = SLIDES[slideIndex];
  const isLastSlide = slideIndex === SLIDES.length - 1;

  function handleNext() {
    if (isLastSlide) {
      router.push('/(onboarding)/about-you');
    } else {
      setSlideIndex((index) => index + 1);
    }
  }

  return (
    <SafeAreaView className="flex-1 justify-between bg-background-light px-6 py-10 dark:bg-background-dark">
      <View className="flex-1 items-center justify-center gap-4">
        <Text className="text-center text-3xl font-bold text-text-primary dark:text-white">
          {slide.title}
        </Text>
        <Text className="text-center text-text-secondary">{slide.body}</Text>
      </View>

      <View className="flex-row justify-center gap-2 pb-6">
        {SLIDES.map((s, index) => (
          <View
            key={s.title}
            className={`h-2 w-2 rounded-full ${index === slideIndex ? 'bg-primary' : 'bg-accent'}`}
          />
        ))}
      </View>

      <Pressable className="items-center rounded-md bg-primary py-3" onPress={handleNext}>
        <Text className="font-semibold text-white">{isLastSlide ? 'Get Started' : 'Next'}</Text>
      </Pressable>
    </SafeAreaView>
  );
}
