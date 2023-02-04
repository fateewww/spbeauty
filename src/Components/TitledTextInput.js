import styled from "styled-components";

const Input = styled.input`
    gap: 16px;
    width: 447px;
    height: 34px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div> </div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='px-3 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;