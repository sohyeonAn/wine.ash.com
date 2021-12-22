import type { NextPage } from "next";
import { BeerContainer } from "../../components";

const StoutsBeerPage: NextPage = () => {
  const name = 'stouts';

  return (
    <BeerContainer
      beerName= {name}
    />
  );
}

export default StoutsBeerPage;