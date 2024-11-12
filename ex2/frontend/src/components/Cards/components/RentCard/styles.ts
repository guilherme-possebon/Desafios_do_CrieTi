import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["background-color"]};
  border-radius: 8px;
  padding: 16px;
`;

export const HintWrapper = styled.div`
  position: relative;
  display: inline-block;

  .hint {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    white-space: nowrap;
    transition: visibility 0s, opacity 0.3s ease;
    margin-top: 8px;
    z-index: 99;
  }

  &:hover .hint {
    visibility: visible;
    opacity: 1;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const PadlockIcon = styled.span`
  margin-right: 8px;
`;

export const Image = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
`;
