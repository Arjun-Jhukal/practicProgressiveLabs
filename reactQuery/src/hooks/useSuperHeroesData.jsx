import { useQuery } from "react-query";

import axios from "axios";

const fetchSuperHero = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = ({ onSuccess, onError }) => {
  return useQuery("super-heroes", fetchSuperHero, {
    // staleTime: 0,
    // cacheTime:5min ~ 500000
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval:false or milisecond value,
    // refetchIntervalInBackground:true,
    // enabled: false, This will make react query to hold fetching data initally
    onSuccess: onSuccess,
    onError: onError,
    // Data Transformation
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
