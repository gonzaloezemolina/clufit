export interface Workout {
  id: string;
  userId: string;
  name: string;
  description?: string;
  difficulty?: string;
  createdAt: string;
}

export interface WorkoutSession {
  id: string;
  workoutId: string;
  startedAt: string;
  finishedAt?: string;
  duration?: number;
  calories?: number;
  averageHeartRate?: number;
}
