import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

function Addresses() {
    return (
        <div className='border rounded-3 col p-4 d-inline-flex justify-content-between flex-column gap-4'>
            <div>
                <div className='title pb-4'>Адреса заведений</div>
                <div className='d-flex flex-column pt-4 gap-4'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div>
            <div class="d-flex justify-content-between pt-5">
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;