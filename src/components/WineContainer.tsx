import { Error, Loading } from "./index";
import { WineCard } from "./WineCard";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from '../constants';

interface WineContainerProps {
  wineName: string
}

export const WineContainer = ({ wineName }: WineContainerProps ) => {
  const { data, error } = useWineData(wineName);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <WineTitle>{wineName}</WineTitle>
      <WineCardContainer>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`wine-${wineName}-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </WineCardContainer>
    </div>
  );
};

const WineTitle = styled.h1`
  font-size: 1.5em;
  line-height: 180%;
`;

const WineCardContainer = styled.main`
  display: grid;
  gap: 1em;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}){
    grid-template-columns: repeat(4, 1fr);
  }
`;