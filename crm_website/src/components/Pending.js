import './Pending.css';

export default function Pending({pending_show, setPending_show, approval_Func}) {
    return <>
   
        <div className="pending_outer">
            <div className="pending_inner">
                <div className="pending_inner_row1">
                    <label>Approve User</label>
                </div>
                <div className='pending_inner_row2'>
                    <button onClick={approval_Func} >APPROVE</button>
                    <button onClick={(e)=>{setPending_show(!pending_show)}} >DISAPPROVE</button>
                </div>
            </div>
        </div>
    </>
}