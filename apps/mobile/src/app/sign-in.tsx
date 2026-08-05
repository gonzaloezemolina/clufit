import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { supabase } from '@/lib/supabase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSignIn() {
    setError(null);
    setIsSubmitting(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setIsSubmitting(false);
    if (signInError) setError(signInError.message);
    // On success, the session updates in the auth store and the root Stack
    // redirects into (app) automatically — no manual navigation needed.
  }

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-1 justify-center gap-4 px-6">
        <Text className="mb-2 text-3xl font-bold text-text-primary dark:text-white">
          Welcome back
        </Text>

        <TextInput
          className="rounded-md border border-accent bg-surface px-4 py-3 text-text-primary"
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="rounded-md border border-accent bg-surface px-4 py-3 text-text-primary"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error && <Text className="text-sm text-red-500">{error}</Text>}

        <Pressable
          className="items-center rounded-md bg-primary py-3 disabled:opacity-50"
          disabled={isSubmitting || !email || !password}
          onPress={handleSignIn}>
          <Text className="font-semibold text-white">
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </Text>
        </Pressable>

        <Link href="/sign-up" className="text-center text-text-secondary">
          Don&apos;t have an account? <Text className="text-secondary">Sign up</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
