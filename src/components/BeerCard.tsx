import { Beer } from "../types/Beer";
import styled from "@emotion/styled";

interface BeerCardProps {
  beerData: Beer
}

export const BeerCard = ({ beerData }: BeerCardProps) => {
  const { name, price, image, rating } = beerData;

  return (
    <Container>
      <img src={image} alt="" />
      <h2>
        {name}
      <Average>{rating.average}</Average>
      </h2>
      <p>{price}</p>
      <p>
        {rating.reviews}
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

