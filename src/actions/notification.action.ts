"use server"

import prisma from "@/lib/prisma";
import { getDbUserId } from "./user.action"

export async function getNotifications() {
    try {
        const userId = await getDbUserId();
        if(!userId) return [];

        const notification = await prisma.notification.findMany({
            where:{
                userId,
            },
            include:{
                creator:{
                    select:{
                        id:true,
                        name:true,
                        username:true,
                        image:true,
                    }
                },
                post:{
                    select:{
                        id:true,
                        content:true,
                        image:true
                    }
                },
                comment:{
                    select:{
                        id:true,
                        content:true,
                        createdAt:true,
                    }
                },
            },orderBy:{
                createdAt:"desc"
            }
        })

        return notification
    } catch (error) {
        console.error("Error in fetching notifications",error);
        throw new Error("Failed to fetch notification")   
    }
}

export async function markNotificationsAsRead(notificationIds: string[]) {
    try {
        await prisma.notification.updateMany({
            where: {
                id: {
                    in: notificationIds,
                },
            },
            data: {
                read: true,
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Error marking notifications as read:", error);
        return { success: false };
    }
}