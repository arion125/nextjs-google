/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react";

type Props = {
  provider: string;
  providerId: string;
};

const SignInComp = ({ provider, providerId }: Props) => {
  return (
    <div className="max-w-3xl flex flex-col gap-3 pt-24 items-center">
      <img
        src="/images/google-logo.png"
        alt="Google"
        className="w-52 object-cover m-auto"
      />
      <p className="text-small">This website is created for learning purpose</p>
      <button
        className="px-4 py-2 bg-blue-400 rounded-md text-white"
        onClick={() => signIn(providerId, { callbackUrl: "/" })}
      >
        Signin with {provider}
      </button>
    </div>
  );
};

export default SignInComp;
