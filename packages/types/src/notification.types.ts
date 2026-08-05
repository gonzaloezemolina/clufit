export type NotificationPriority = "critical" | "high" | "medium" | "low";

export interface Notification {
  id: string;
  userId: string;
  title: string;
  body: string;
  type: string;
  priority: NotificationPriority;
  sentAt: string;
  readAt?: string;
}
