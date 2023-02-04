import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 216px;
`;

const Input = styled.input`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
width: 217px;
height: 34px;
left: 16px;
top: 8px;
background: #F8FAFC;
border: 1px solid #E2E8F0;
border-radius: 24px;
    &:hover {
        background: #F8FAFC;
        opacity: 0.8;
        border: 1px solid #E2E8F0;
    }
    &:focus {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
    }
`;

const SearchIconWrapper = styled.div`
    position: absolute;
    box-sizing:border-box;
    right: 12px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='px-3' placeholder='Найти'/>
            <SearchIconWrapper className='p-2'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;