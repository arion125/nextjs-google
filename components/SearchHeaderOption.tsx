import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

type Props = {
  title: string;
  selected: boolean;
};

const SearchHeaderOption = ({ title, selected }: Props) => {
  const router = useRouter();

  const selectTab = (title: string) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };

  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex px-4 py-2 gap-1 items-center border-b-2 border-transparent cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      {title == "All" ? (
        <MagnifyingGlassIcon className="h-4" />
      ) : (
        <PhotoIcon className="h-4" />
      )}
      <span>{title}</span>
    </div>
  );
};

export default SearchHeaderOption;
