import './Otp.css';
import axios from 'axios';
import { MdLaptopWindows } from 'react-icons/md';


export default function Otp({ setshow1, setshow, setshow2,email,OTP,setotp }) {
    // const verify = (e) => {
        
    //     setshow1(true)
    //     setshow(true)
    //     setshow2(true)
    // }
    // const resend=(e)=>[

    // ]
    const verify=(e)=>{
        setotp("")
        // const url="http://localhost:3000/dev/verifyotp"
        const url="https://biw855rg2h.execute-api.us-east-1.amazonaws.com/dev/verifyotp"
        const data={OTP:OTP,email:email};
        const headers={}
        axios
        .post(url,data,{headers:headers})
        .then((res)=>{
            console.log("response"+JSON.stringify(res.data))
            let result = res.data + "";
            if (result.includes("Incorrect Otp"))
            setshow1(true)
            setotp("")
            if(result.includes("verify"))
            setshow2(true)
                    

        })
        .catch((err)=>{
            console.log("Err==>"+JSON.stringify(err))
        })
    }
    const resend=(e)=>{
        setotp("");
        // const url="http://localhost:3000/dev/resend"
        const url="https://biw855rg2h.execute-api.us-east-1.amazonaws.com/dev/resend"
        const data={OTP:OTP,email:email};
        const headers={};
        axios
        .post(url,data,{headers:headers})
        .then((res)=>{
            console.log("response===>"+JSON.stringify(res.data))
            let result = res.data + "";
            if (result.includes("Incorrect Otp"))
            setshow1(true)
            if(result.includes("verify"))
            setshow2(true)

        })
        .catch((err)=>{
            console.log("Err==>"+JSON.stringify(err))
        })
    }
    // const [OTP, setotp] = useState("");
    return <> 
        <div className="otp_outer">
            <div className="otp_inner">
                <div className="otp_inner_row1">
                    <label>Verify OTP!</label>
                </div>
                <div className='otp_inner_row2'>
                    <input type="text" placeholder="OTP" onChange={(e) => { setotp(e.target.value) }}  value={OTP}/>
                    
                </div>
                <div className='otp_inner_row3'>
                    <button onClick={(e)=>{resend(e)}}>RESEND</button>
                    {/*<button onClick={(e)=>{setshow(false),setshow1(true)}}>VERIFY</button>*/}
                    <button onClick={(e) => {
                        verify(e)
                    }}>VERIFY</button>
                </div>
            </div>
        </div>
    </>
}