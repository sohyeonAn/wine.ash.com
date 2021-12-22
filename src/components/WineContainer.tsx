import { Error, Loading } from "./index";
import { WineCard } from "./WineCard";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";

export const WineContainer = ({ wineName }: { wineName: string }) => {
  const { data, error } = useWineData(wineName);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <h1>{wineName}</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`wine-${wineName}-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};