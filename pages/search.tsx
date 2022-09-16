import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";

type Props = {
  results: any;
};

const Search = (props: Props) => {
  console.log(props.results);
  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>

      <Header section="search" />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(`
    https://www.googleapis.com/customsearch/v1?key=${
      process.env.GOOGLE_SEARCH_API_KEY
    }&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}${
        context.query.searchType && "&searchType=image"
      }
  `).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};

export default Search;
