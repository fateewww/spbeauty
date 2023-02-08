import styled from "styled-components";
import EditIcon from "../../../../../Icons/EditIcon";
import RemoveIcon from "../../../../../Icons/RemoveIcon";

const Option = styled.div``;

function ListElement(props) {
  return (
    <div className="d-flex flex-row align-items-center align-self-stretch gap-2"> 
      <Option className="flex-grow-1">{props.children}</Option>
      <EditIcon minWidth="0">Ред.</EditIcon>
      <RemoveIcon minWidth="0">Удл.</RemoveIcon>
    </div>
  );
}

export default ListElement;