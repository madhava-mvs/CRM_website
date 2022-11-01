import './Pending.css';

export default function Pending({pending_show, setPending_show, approval_Func}) {
    return <>
   
        <div className="otp_outer">
            <div className="otp_inner">
                <div className="otp_inner_row1">
                    <label>Approve User</label>
                </div>
                <div className='otp_inner_row2'>
                </div>
                <div className='otp_inner_row3'>
                    <button onClick={approval_Func} >APPROVE</button>
                    <button onClick={(e)=>{setPending_show(!pending_show)}} >DISAPPROVE</button>
                </div>
            </div>
        </div>
    </>
}