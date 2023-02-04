import styled from 'styled-components';
import IconOnlyButton from '../../../../../Components/IconOnlyButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    color: #0F172A;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row justify-content-between gap-2'>
            <Option>{props.children}</Option>
                <div className='d-flex justify-content-end'>
                <IconOnlyButton icon={<EditIcon/>}/>
                <IconOnlyButton icon={<RemoveIcon/>}/>
                </div>
        </div>
    );
}

export default ListElement;
