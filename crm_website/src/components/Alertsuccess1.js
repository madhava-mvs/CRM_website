import { useNavigate } from 'react-router-dom';
import './alertsuccess1.css'
import img1 from './images/alertsuccess_righttick.png';
export default function Success1({setshow2}) {
    const navigate = useNavigate();
    function OK() {
        navigate("/resetpassword")
    }
    return <>
        <div className='alertsuccess1'>
            <div className='alertsuccess1_popup'>
                <img src={img1} />
                <label>Success!</label>
                <button type='Button' onClick={OK}/* onClick={OK}*/>OK</button>
            </div>
        </div>
    </>
}