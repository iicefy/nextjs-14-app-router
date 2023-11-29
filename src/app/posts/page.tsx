import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";
import { revalidatePath } from "next/cache";
import DeletePostButton from "@/components/post/DeletePostBtn";
import { deletePost } from "@/ีutils/api/post";

export const metadata = {
  title: "Post",
};

async function getPost() {
  const user = await currentUser();

  if (!user?.id) throw new Error("userId not found");

  const posts = await prisma.post.findMany({
    where: {
      userId: user?.id,
    },
  });

  return posts;
}

const PostsPage = async () => {
  const data = await getPost();

  return (
    <div className="p-4 gap-4 flex flex-col">
      {data.map((post) => {
        return (
          <Card
            key={post.id}
            className="p-4 border border-solid border-slate-200 flex justify-between items-center"
          >
            <div className="flex flex-col">
              <h2 className="text-xl font-bold tracking-tight">{post.title}</h2>
              {post.content}
            </div>
            <form action={deletePost}>
              <input value={post.id} name="postId" type="hidden" />
              <DeletePostButton />
            </form>
          </Card>
        );
      })}
    </div>
  );
};

export default PostsPage;
