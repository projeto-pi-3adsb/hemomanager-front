import { Card } from 'primereact/card';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  
import "primeflex/primeflex.css";

const header = <img alt="Card" src='../../assets/maps.png'/>;
const footer = <span>
    <button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
    <button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
</span>;

export function CardMeusAgend(props) {
    return (<>
    <div className='p-col'>
        <Card footer={footer} header={header}>
            Content
        </Card>
    </div>
     </>)
}