type Props = {
  results: any;
};

const SearchResults = (props: Props) => {
  return (
    <div className="max-w-3xl w-full justify-center pl-4 sm:justify-start sm:pl-12 md:pl-20 lg:pl-36">
      <p className="text-gray-600 text-sm mb-5 mt-4">
        About {props.results.searchInformation.formattedTotalResults} results (
        {props.results.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
};

export default SearchResults;
