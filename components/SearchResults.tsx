import parse from "html-react-parser";

type Props = {
  results: any;
};

type SearchResult = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: Array<any>;
    metatags: Array<any>;
    cse_image: Array<any>;
  };
};

const SearchResults = (props: Props) => {
  return (
    <div className="max-w-3xl w-full justify-center px-4 sm:justify-start sm:px-12 md:px-20 lg:pl-36 lg:pr-0">
      <p className="text-gray-600 text-sm mb-5 mt-4">
        About {props.results.searchInformation.formattedTotalResults} results (
        {props.results.searchInformation.formattedSearchTime} seconds)
      </p>
      {props.results.items.map((item: SearchResult) => {
        return (
          <div key={item.link} className="mb-8 space-y-1">
            <div className="group w-fit">
              <a href="{item.link}" className="text-sm truncate w-fit">
                {item.formattedUrl}
              </a>
              <a href={item.link}>
                <h2 className="text-blue-800 text-xl w-fit cursor-pointer truncate group-hover:underline">
                  {item.title}
                </h2>
              </a>
            </div>
            <p className="text-sm text-gray-800">{parse(item.htmlSnippet)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
