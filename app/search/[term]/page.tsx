import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term } }: Props) => {
  if (!term) notFound();

  const termToUse = decodeURI(term); // make the wildcard term from uri to human readable

  // API call to get the Searched Movies
  // API call to get the  Popular movies

  return <div>Welcome to the search page {termToUse}</div>;
};

export default SearchPage;
