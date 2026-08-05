import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { supabase } from '@/lib/supabase';

export default function SignUp() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSignUp() {
    setError(null);
    setIsSubmitting(true);
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { fullname, username } },
    });
    setIsSubmitting(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    // With email confirmation enabled (Supabase default), signUp doesn't
    // return an active session yet — the user must confirm via email first.
    // If it *is* returned, the auth store picks it up and the root Stack
    // redirects into (app) automatically.
    if (!data.session) setConfirmationSent(true);
  }

  if (confirmationSent) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center gap-2 bg-background-light px-6 dark:bg-background-dark">
        <Text className="text-center text-lg text-text-primary dark:text-white">
          Check your email to confirm your account.
        </Text>
        <Link href="/sign-in" className="text-secondary">
          Back to sign in
        </Link>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-1 justify-center gap-4 px-6">
        <Text className="mb-2 text-3xl font-bold text-text-primary dark:text-white">
          Create your account
        </Text>

        <TextInput
          className="rounded-md border border-accent bg-surface px-4 py-3 text-text-primary"
          placeholder="Full name"
          value={fullname}
          onChangeText={setFullname}
        />
        <TextInput
          className="rounded-md border border-accent bg-surface px-4 py-3 text-text-primary"
          placeholder="Username"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />
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
          disabled={isSubmitting || !email || !password || !fullname || !username}
          onPress={handleSignUp}>
          <Text className="font-semibold text-white">
            {isSubmitting ? 'Creating account…' : 'Sign up'}
          </Text>
        </Pressable>

        <Link href="/sign-in" className="text-center text-text-secondary">
          Already have an account? <Text className="text-secondary">Sign in</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
