import { Wine } from "../types/Wine";

interface WineCardProps {
  wineData: Wine
}

export const WineCard = ({ wineData }: WineCardProps) => {
  const { wine, winery } = wineData;

  return (
    <div>
      <h2>{wine}</h2>
      <p>{winery}</p>
    </div>
  )
}