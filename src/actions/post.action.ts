"use server"

import prisma from "@/lib/prisma"
import { getDbUserId } from "./user.action"
import { revalidatePath } from "next/cache"

export async function createPost(content:string,image:string) {
    try {
        const userId = await getDbUserId()

        if(!userId) return;

        const post = await prisma.post.create({
            data:{
                content,
                image,
                authorId:userId
            }
        })

        revalidatePath("/");
        return {success:true,post}
    } catch (error) {
        console.error("Failed to create a post",error);
        return {success:false,error:"Failed to create a post"}
        
    }
}

export async function getPosts() {
    try {
        await prisma.post.findMany({
            orderBy:{
                createdAt:"desc",

            },
            include:{
                author:{
                    select:{
                        name:true,
                        image:true,
                        username:true
                    }
                },
                comments:{
                    include:{
                        author:{
                            select:{
                                id:true,
                                name:true,
                                username:true,
                                image:true,
                            }
                        }
                    }
                }
            }
        })
    } catch (error) {
        console.log("Error in getting posts",error);
    }
}