export type GoalStatus = "active" | "in_progress" | "paused" | "completed" | "archived";

export interface Goal {
  id: string;
  userId: string;
  title: string;
  description?: string;
  category: string;
  isMainGoal: boolean;
  target?: string;
  progress: number;
  status: GoalStatus;
  createdAt: string;
  completedAt?: string;
}
