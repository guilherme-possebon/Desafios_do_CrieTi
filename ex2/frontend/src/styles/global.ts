import styled, { createGlobalStyle } from "styled-components";

interface TextProps {
  $fontWeight: string;
}

export const device = {
  pocket: `(max-width: 600px)`,
  phone: `(min-width: 600px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 992px)`,
  desktop: `(min-width: 1200px)`,
};

const DefaultConfigForTitle = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  line-height: 130%;
  font-family: "Baloo 2", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

const DefaultConfigForText = styled.p`
  color: ${(props) => props.theme["base-text"]};
  line-height: 130%;
  font-family: "Roboto", serif;
  font-style: normal;
`;

const DefaultConfigForButton = styled.button`
  color: ${(props) => props.theme["base-button"]};
  line-height: 160%;
  font-family: "Roboto", serif;
  font-style: normal;

  &:hover {
    color: ${(props) => props.theme["base-hover"]};
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-main"]};
}

body {
   background-color : ${(props) => props.theme.white};
   color: ${(props) => props.theme["base-text"]};
   -webkit-font-smoothing: antialiased;
}

body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
}

button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
}
`;

export const TitleXl = styled(DefaultConfigForTitle)`
  font-size: 48px;
  font-weight: bolder;
`;

export const TitleL = styled(DefaultConfigForTitle)`
  font-size: 32px;
  font-weight: bolder;
`;

export const TitleM = styled(DefaultConfigForTitle)`
  font-size: 24px;
  font-weight: bolder;
`;

export const TitleS = styled(DefaultConfigForTitle)`
  font-size: 20px;
  font-weight: bold;
`;

export const TitleXs = styled(DefaultConfigForTitle)`
  font-size: 18px;
  font-weight: bold;
`;

export const TextL = styled(DefaultConfigForText)<TextProps>`
  font-size: 20px;
  font-weight: ${(props) => props.$fontWeight};
`;

export const TextM = styled(DefaultConfigForText)<TextProps>`
  font-size: 16px;
  font-weight: ${(props) => props.$fontWeight};
`;

export const TextS = styled(DefaultConfigForText)<TextProps>`
  font-size: 14px;
  font-weight: normal;
`;

export const TextXs = styled(DefaultConfigForText)<TextProps>`
  font-size: 12px;
  font-weight: bold;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 130%;
  font-family: "Roboto", serif;
  font-style: normal;
`;

export const ButtonG = styled(DefaultConfigForButton)`
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonM = styled(DefaultConfigForButton)`
  font-size: 12px;
  font-weight: normal;
`;

interface PriceProps {
  $price: boolean;
}

export const PriceColor = styled(TitleM)<PriceProps>`
  color: ${(props) => props.theme["base-text"]};
  font-weight: ${(props) => (props.$price ? 800 : 700)};
  font-size: ${(props) => (props.$price ? "24px" : "16px")};
`;
