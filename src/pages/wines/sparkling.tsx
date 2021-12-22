import type { NextPage } from "next";
import { WineContainer } from "../../components";

const SparklingtWinePage: NextPage = () => {
  const name = 'sparkling';

  return (
    <WineContainer 
      wineName={name}
    />
  );
}

export default SparklingtWinePage;