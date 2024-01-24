type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenerPage = ({ params: { id }, searchParams: { genre } }: Props) => {
  return (
    <div>
      Welcome to the genre {id} and the search is {genre}
    </div>
  );
};

// http://localhost:3000/genre/80?genre=crime
export default GenerPage;
