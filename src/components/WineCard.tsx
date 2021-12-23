import Image from 'next/image'
import { Wine } from "../types/Wine";
import styled from "@emotion/styled";

interface WineCardProps {
  wineData: Wine
}

export const WineCard = ({ wineData }: WineCardProps) => {
  const { wine, winery, location, rating, image } = wineData;

  return (
    <Container>
      <Image src={image} alt="" />
      <h2>
        {wine}
        <Average>{rating.average}</Average>
      </h2>
      <p>{winery} - {location}</p>
      <p>
        <span>{rating.reviews}</span>
      </p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow:1px 1px 5px rgba(0,0,0,0.3);
  border-radius: 1em;
`
const Average = styled.p`
  display: inline-block;
  padding: 0.2em;
  font-size: 16px;
  margin: 0 0.3em;
  color: white;
  background-color: pink;
  border-radius: 2px;
`

