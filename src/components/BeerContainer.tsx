import { Error, Loading } from "./index";
import { BeerCard } from "./BeerCard";
import { useBeerData } from "../hooks/useBeerData";
import { Beer } from "../types/Beer";

interface BeerContainerProps {
  beerName: string
}

export const BeerContainer = ({ beerName }: BeerContainerProps) => {
  const { data, error } = useBeerData(beerName);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <h1>{beerName}</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`beer-${beerName}-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </main>
    </div>
  );
};