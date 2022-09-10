/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Image"
          className="rounded-full w-10 hover:bg-slate-300 p-0.5 cursor-pointer"
        />
      </>
    );
  }
  return (
    <>
      <button
        className="bg-blue-400 rounded-md text-white px-4 py-2 hover:bg-blue-600"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
};

export default User;
