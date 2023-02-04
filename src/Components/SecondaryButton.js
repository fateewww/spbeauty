import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        border: 1px solid #64748B;
        border-radius: 24px;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        min-width: 217px;
        color: #152842;
        &:hover {
            background: #FFFFFF;
            opacity: 0.8;
        }
        &:active {
            background: #FFFFFF;
            opacity: 0.6;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;