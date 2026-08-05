export type ChallengeStatus = "pending" | "active" | "rejected" | "finished" | "cancelled";

export interface Challenge {
  id: string;
  creatorId: string;
  title: string;
  description?: string;
  type: string;
  reward?: string;
  punishment?: string;
  startDate: string;
  endDate: string;
  status: ChallengeStatus;
}

export interface ChallengeParticipant {
  challengeId: string;
  userId: string;
  progress: number;
  completed: boolean;
}
