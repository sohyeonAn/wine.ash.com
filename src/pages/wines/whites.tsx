import type { NextPage } from "next";
import { WineContainer } from "../../components";

const WhitestWinePage: NextPage = () => {
  const name = 'whites';

  return (
    <WineContainer 
      wineName={name}
    />
  );
}

export default WhitestWinePage;