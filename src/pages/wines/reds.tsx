import type { NextPage } from "next";
import { WineContainer } from "../../components";

const RedsWinePage: NextPage = () => {
  const name = 'reds';

  return (
    <WineContainer 
      wineName={name}
    />
  );
}

export default RedsWinePage;