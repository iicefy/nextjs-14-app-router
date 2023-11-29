import SubmitButton from "@/components/post/CreatePostBtn";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addPost } from "@/ีutils/api/post";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <form action={addPost} className="flex flex-col gap-4">
        <div className="p-4 flex flex-col items-end gap-4">
          <Input
            className="border border-solid border-slate-200"
            name="title"
            placeholder="Title"
          />
          <Textarea
            placeholder="Create your post.."
            id="message"
            className="border border-solid border-slate-200"
            name="content"
            maxLength={200}
          />
          <div>
            <SubmitButton />
          </div>
        </div>
      </form>
      {children}
    </div>
  );
}
