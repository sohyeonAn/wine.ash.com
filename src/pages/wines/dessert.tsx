import type { NextPage } from "next";
import { WineContainer } from "../../components";

const DessertWinePage: NextPage = () => {
  const name = 'dessert';

  return (
    <WineContainer 
      wineName={name}
    />
  );
}

export default DessertWinePage;