import type { NextPage } from "next";
import { WineContainer } from "../../components";

const RoseWinePage: NextPage = () => {
  const name = 'rose';

  return (
    <WineContainer 
      wineName={name}
    />
  );
}

export default RoseWinePage;