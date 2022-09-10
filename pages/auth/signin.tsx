import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
} from "next-auth/react";
import Header from "../../components/Header";
import SignInComp from "../../components/SignInComp";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
};

const SignIn = ({ providers }: Props) => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        {Object.values(providers).map((provider) => (
          <SignInComp
            key={provider.name}
            provider={provider.name}
            providerId={provider.id}
          />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn;
