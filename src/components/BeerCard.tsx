import Image from 'next/image'
import { Beer } from "../types/Beer";
import styled from "@emotion/styled";

interface BeerCardProps {
  beerData: Beer
}

export const BeerCard = ({ beerData }: BeerCardProps) => {
  const { name, price, image, rating } = beerData;

  return (
    <Container>
      <Image 
        src={image} 
        alt="Beer picture"
        width={100}
        height={250}
      />
      <h2>
        {name}
      <Average>{rating.average?.toFixed(1)}</Average>
      </h2>
      <p>price: {price}</p>
      <p>
        reviews: {rating.reviews}
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

