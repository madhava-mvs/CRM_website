import './Otp.css';
import { useState } from 'react';

export default function Otp({ setshow1, setshow, setshow2 }) {
    const verify = (e) => {
        
        setshow1(true)
        setshow(true)
        setshow2(true)
    }
    const [otp, setOtp] = useState("");
    return <>
        <div className="otp_outer">
            <div className="otp_inner">
                <div className="otp_inner_row1">
                    <label>Verify OTP!</label>
                </div>
                <div className='otp_inner_row2'>
                    <input type="text" placeholder="OTP" onChange={(e) => { setOtp(e.target.value) }} />
                    
                </div>
                <div className='otp_inner_row3'>
                    <button>RESEND</button>
                    {/*<button onClick={(e)=>{setshow(false),setshow1(true)}}>VERIFY</button>*/}
                    <button onClick={(e) => {
                        verify(e)
                    }}>VERIFY</button>
                </div>
            </div>
        </div>
    </>
}