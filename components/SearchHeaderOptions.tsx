import { useRouter } from "next/router";
import SearchHeaderOption from "./SearchHeaderOption";

const SearchHeaderOptions = () => {
  const router = useRouter();
  return (
    <div className="flex select-none pt-4 max-w-full w-full justify-center border-b sm:justify-start sm:pl-36">
      <SearchHeaderOption
        title="All"
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        selected={router.query.searchType === "image"}
      />
    </div>
  );
};

export default SearchHeaderOptions;
