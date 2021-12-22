import type { NextPage } from "next";
import { WineContainer } from "../../components";

const PortWinePage: NextPage = () => {
  const name = 'port';

  return (
    <WineContainer 
      wineName={name}
    />
  );
}

export default PortWinePage;