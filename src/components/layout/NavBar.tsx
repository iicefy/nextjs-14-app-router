import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import clsx from "clsx";
import Link from "next/link";
import { Fragment } from "react";

const NavBar = async () => {
  const user = await currentUser();

  return (
    <div className="h-16 flex border-b border-x-0 border-t-0 border-solid border-slate-200">
      <div className="mx-auto max-w-2xl flex flex-1 justify-between items-center px-4">
        <div className="text-xl">App</div>
        <div className="flex gap-12 items-center">
          {user ? (
            <Fragment>
              <Link href={"/feed"}>Feed</Link>
              <Link href={"/posts"}>Posts</Link>
              <UserButton afterSignOutUrl="/" />
            </Fragment>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
