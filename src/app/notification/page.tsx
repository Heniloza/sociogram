"use client";

import {
  getNotifications,
  markNotificationsAsRead,
} from "@/actions/notification.action";
import NotificationsSkeleton from "@/components/NotificationSkeleton";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";

type Notifications = Awaited<ReturnType<typeof getNotifications>>;
type Notification = Notifications[number];

function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      try {
        const data = await getNotifications();
        setNotifications(data);

        const unReadIds = data.filter((m) => !m.read).map((m) => m.id);
        if (unReadIds.length > 0) await markNotificationsAsRead(unReadIds);
      } catch (error) {
        toast.error("Failed to fetch notifications");
        console.log("Failed to fetch notifications", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  if (isLoading) return <NotificationsSkeleton />;

  return <div>Notifications</div>;
}

export default Notifications;
