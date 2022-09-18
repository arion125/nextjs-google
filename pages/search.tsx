import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import SearchResultsImage from "../components/SearchResultsImage";
import Response from "../Response";
import { ResponseImage } from "../Response";

type Props = {
  results: any;
};

const Search = (props: Props) => {
  console.log(props.results);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      <Header section="search" />

      {router.query.searchType != "image" ? (
        <SearchResults results={props.results} />
      ) : (
        <SearchResultsImage results={props.results} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const startIndex = context.query.start || 1;
  const mockData = false;
  const mockDataImage = false;
  const data = mockData
    ? Response
    : mockDataImage
    ? ResponseImage
    : await fetch(`
    https://www.googleapis.com/customsearch/v1?key=${
      process.env.GOOGLE_SEARCH_API_KEY
    }&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}${
        context.query.searchType && "&searchType=image"
      }&start=${startIndex}
  `).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};

export default Search;
