import './Alertfailed.css';
import img3 from "./images/alertfailed_failedclose.png";
export default function Failed({  message, setshow1,setotp }) {
    function OK(){
        setshow1(false)
        setotp("")
    }
    return <>
        <div className='alertfailed'>
            <div className="alertfailed_popup">
                <img src={img3} />
                <label>{message}</label>
                <button type="Button" /*onClick={e => { setshowfail(false) }}*/ onClick={OK}>OK</button>
            </div>
        </div>
    </> 
}

