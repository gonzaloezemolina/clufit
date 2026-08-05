/**
 * Plans from docs/14-monetization.md. Draft — pending final value-proposition copy.
 */
export type PlanId = "free" | "starter" | "premium";

export interface Plan {
  id: PlanId;
  name: string;
  priceUsd: number;
  maxActiveGoals: number | null;
  maxActiveHabits: number | null;
}

export const plans: Record<PlanId, Plan> = {
  free: { id: "free", name: "Free", priceUsd: 0, maxActiveGoals: 3, maxActiveHabits: 5 },
  starter: { id: "starter", name: "Starter", priceUsd: 9, maxActiveGoals: null, maxActiveHabits: null },
  premium: { id: "premium", name: "Premium", priceUsd: 39, maxActiveGoals: null, maxActiveHabits: null },
};
