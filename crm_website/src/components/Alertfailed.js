import './Alertfailed.css';
import img3 from "./images/alertfailed_failedclose.png";
export default function Failed({ setshowfail, message, setshow2 }) {
    return <>
        <div className='alertfailed'>
            <div className="alertfailed_popup">
                <img src={img3} />
                <label>{message}</label>
                <button type="Button" /*onClick={e => { setshowfail(false) }}*/ onClick={e => { setshow2(false) }}>OK</button>
            </div>
        </div>
    </>
}

