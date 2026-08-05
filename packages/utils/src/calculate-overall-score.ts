/**
 * First-pass implementation of the Overall Score formula described in
 * contracts/dashboard.contract.md: a weighted average of the module scores,
 * where the Main Goal's progress carries extra weight. Procrastination is
 * inverted (100 - score) since a higher Procrastination Score means worse
 * outcome. Weights are provisional and should be tuned once real usage data
 * exists.
 */
export interface ModuleScores {
  disciplineScore: number;
  procrastinationScore: number;
  recoveryScore: number;
  fitnessScore: number;
  nutritionScore: number;
  mainGoalProgress?: number;
}

const WEIGHTS = {
  discipline: 1,
  procrastination: 1,
  recovery: 1,
  fitness: 1,
  nutrition: 1,
  mainGoal: 2,
} as const;

export function calculateOverallScore(scores: ModuleScores): number {
  const procrastinationInverted = 100 - scores.procrastinationScore;

  const weighted = [
    [scores.disciplineScore, WEIGHTS.discipline],
    [procrastinationInverted, WEIGHTS.procrastination],
    [scores.recoveryScore, WEIGHTS.recovery],
    [scores.fitnessScore, WEIGHTS.fitness],
    [scores.nutritionScore, WEIGHTS.nutrition],
    ...(scores.mainGoalProgress !== undefined ? [[scores.mainGoalProgress, WEIGHTS.mainGoal]] : []),
  ] as const;

  const totalWeight = weighted.reduce((sum, [, weight]) => sum + weight, 0);
  const totalScore = weighted.reduce((sum, [value, weight]) => sum + value * weight, 0);

  return Math.round(totalScore / totalWeight);
}
