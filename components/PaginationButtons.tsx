import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className="flex justify-between text-blue-700 pb-10 pt-5">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <ChevronLeftIcon className="w-4" />
            <span>Previous</span>
          </div>
        </Link>
      )}

      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <span>Next</span>
            <ChevronRightIcon className="w-4" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
