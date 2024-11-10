import { PriceColor } from "../../styles/global";
import { NumberInput } from "../NumberInput";
import {
  CardTitle,
  HorizontalContainer,
  ImgCoffeeCard,
  Infos,
  InfosCardContainer,
  InputsContainer,
  RemoveContainer,
  TrashStyled,
} from "./styles";

interface CardProps {
  imgSrc: string;
  title: string;
  price: string;
}
export function CardHorizontal({ imgSrc, title, price }: CardProps) {
  return (
    <>
      <HorizontalContainer>
        <ImgCoffeeCard src={imgSrc} alt="" />
        <InfosCardContainer>
          <Infos>
            <CardTitle>{title}</CardTitle>
            <InputsContainer>
              <NumberInput />
              <RemoveContainer type="button">
                <TrashStyled />
                <p>Remover</p>
              </RemoveContainer>
            </InputsContainer>
          </Infos>
          <PriceColor $price={false}>R$ {price}</PriceColor>
        </InfosCardContainer>
      </HorizontalContainer>
    </>
  );
}
