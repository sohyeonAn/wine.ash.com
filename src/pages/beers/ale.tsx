import type { NextPage } from "next";
import { BeerContainer } from "../../components";

const AleBeerPage: NextPage = () => {
  const name = 'ale';

  return (
    <BeerContainer
      beerName= {name}
    />
  );
}

export default AleBeerPage;