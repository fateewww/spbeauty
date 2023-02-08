import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

function Addresses() {
  const AddressesComponent = styled.div`
    border-radius: 24px;
    border: 1px solid rgba(100, 116, 139, 0.12);
    padding: 24px;
  `;
  return (
    <AddressesComponent>
      <div className="d-flex flex-column gap-4 justify-content-between">
        <div className="title">Адреса заведений</div>
        <div className="d-inline-flex flex-column gap-2">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
          <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
      </div>
    </AddressesComponent>
  );
}

export default Addresses;