import Image from "next/image";
import User from "./User";
import {
  XMarkIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { MouseEvent, useRef } from "react";
import SearchHeaderOptions from "./SearchHeaderOptions";

type Props = {
  section?: string;
};

const Header = ({ section }: Props) => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term?.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  switch (section) {
    case "search":
      return (
        <header className="sticky top-0 w-full pt-4 bg-white h-auto text-gray-700 text-sm font-normal">
          <div className="w-full flex justify-between items-center gap-4 h-full pr-4 pl-4">
            <div className="flex gap-6 flex-grow max-w-xl">
              <Image
                onClick={() => router.push("/")}
                className="cursor-pointer"
                src={"/images/google-logo.png"}
                width={120}
                height={40}
                objectFit="contain"
                alt="Google Logo"
              />
              <form className="flex items-center flex-grow justify-between border border-gray-200 rounded-full px-5 h-11 gap-1 hover:shadow-md focus-within:shadow-md">
                <input
                  type="text"
                  className="focus:outline-none text-base w-full"
                  defaultValue={router.query.term}
                  ref={searchInputRef}
                />
                <div className="flex gap-2">
                  <XMarkIcon
                    onClick={() => (searchInputRef.current!.value = "")}
                    className="h-5 text-gray-500 cursor-pointer"
                  />
                  <div className="hidden sm:inline-flex gap-1 pl-2 border-l border-gray-300">
                    <MicrophoneIcon className="h-5 text-blue-500 cursor-pointer" />
                    <MagnifyingGlassIcon className="h-5 text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <button type="submit" hidden onClick={search}></button>
              </form>
            </div>

            <User />
          </div>
          <SearchHeaderOptions />
        </header>
      );

    default:
      return (
        <header className="h-20 text-gray-700 flex justify-between pr-4 pl-4 items-center text-sm font-normal">
          <div className="flex gap-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="link">Gmail</p>
            <p className="link">Images</p>
            <User />
          </div>
        </header>
      );
  }
};

export default Header;
