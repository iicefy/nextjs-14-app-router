"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export async function addPost(formData: FormData) {
  "use server";

  const user = await currentUser();

  if (!user?.id) throw new Error("userId not found");

  const postTitle = formData.get("title")?.toString();
  const postContent = formData.get("content")?.toString();

  if (!postTitle || !postContent) return;

  await prisma.post.create({
    data: {
      userId: user?.id,
      title: postTitle,
      content: postContent,
    },
  });

  revalidatePath("/posts");
}

export async function deletePost(form: FormData) {
  "use server";
  const postId = form.get("postId")?.toString();

  if (!postId) throw new Error("no postId");

  await prisma.post.delete({
    where: {
      id: postId,
    },
  });

  revalidatePath("");
}
