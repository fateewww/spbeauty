import Clickable from "./Clickable";
import styled from "styled-components";

function PrimaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "217px" : props.minWidth;
  const Button = styled.div`
    background: #3b82f6;
    border-radius: 24px;
    box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
    min-width: ${minWidth};
    color: white;
    &:hover {
      background: #3b82f6;
      opacity: 0.8;
    }
    &:active {
      background: #152842;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 mb-4 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default PrimaryButton;