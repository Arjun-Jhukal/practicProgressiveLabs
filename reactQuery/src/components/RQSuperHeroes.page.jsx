import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

const RQSuperHeroespage = () => {
  const onSuccess = (data) => {
    console.log("Perform side Effect after Fetching Data", data);
  };

  const onError = (error) => {
    console.log("Perform side Effect after encountering Error", error);
  };
  const { isLoading, data, isError, error, refetch, isFetching } = useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>

      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};

export default RQSuperHeroespage;
