/* eslint-disable react/no-unescaped-entities */
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const MainSearch = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (e: Event) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term?.trim()) return;
    router.push(`/search?term=${term.trim()}`);
  };

  return (
    <form className="flex items-center flex-col mt-40 max-w-xl m-auto gap-6">
      <Image
        src={"/images/google-logo.png"}
        width={300}
        height={100}
        objectFit="cover"
        alt="Google Logo"
      />
      <div className="flex border border-solid border-gray-400 rounded-full items-center px-3 h-12 w-full max-w-[90%] hover:shadow-md focus-within:shadow-md">
        <MagnifyingGlassIcon className="h-5 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="focus:outline-none text-base flex-grow px-2 font-normal"
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex gap-5">
        <button onClick={search} className="button">
          Google Search
        </button>
        <button className="button">I'm feeling lucky</button>
      </div>
    </form>
  );
};

export default MainSearch;
