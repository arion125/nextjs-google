/* eslint-disable @next/next/no-img-element */
import PaginationButtons from "./PaginationButtons";

type Props = {
  results: any;
};

type SearchResultImage = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  mime: string;
  fileFormat: string;
  image: {
    contextLink: string;
    height: number;
    width: number;
    byteSize: number;
    thumbnailLink: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
  };
};

const SearchResultsImage = (props: Props) => {
  return (
    <div className="w-full justify-center px-4">
      <p className="text-gray-600 text-sm mb-5 mt-4">
        About {props.results.searchInformation.formattedTotalResults} results (
        {props.results.searchInformation.formattedSearchTime} seconds)
      </p>
      <div className="grid grid-flow-row grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {props.results.items.map((item: SearchResultImage) => {
          return (
            <div key={item.link} className="group">
              <a href={item.link}>
                <div className="flex flex-col gap-4">
                  <img
                    src={item.link}
                    className="w-full h-60 object-contain group-hover:shadow-lg"
                    alt={item.title}
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className="group-hover:underline truncate">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-700">{item.displayLink}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <PaginationButtons />
    </div>
  );
};

export default SearchResultsImage;
