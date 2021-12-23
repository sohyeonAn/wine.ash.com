import { Error, Loading } from "./index";
import { BeerCard } from "./BeerCard";
import { useBeerData } from "../hooks/useBeerData";
import { Beer } from "../types/Beer";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from '../constants';

interface BeerContainerProps {
  beerName: string
}

export const BeerContainer = ({ beerName }: BeerContainerProps) => {
  const { data, error } = useBeerData(beerName);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <BeerTitle>{beerName}</BeerTitle>
      <BeerCardContainer>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`beer-${beerName}-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </BeerCardContainer>
    </div>
  );
};

const BeerTitle = styled.h1`
  font-size: 1.5em;
  line-height: 180%;
`;

const BeerCardContainer = styled.main`
  display: grid;
  gap: 1em;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}){
    grid-template-columns: repeat(4, 1fr);
  }
`;