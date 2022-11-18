import { BsThreeDotsVertical, BsBellFill } from "react-icons/bs";
import "./List.css";

export default function List({ user, pending_show, setPending_show, setApproval_mail }) {

    const Pend = item => () => {
        console.log(item.txtEmail)
        setApproval_mail(item.txtEmail)
        setPending_show(!pending_show);
    }

    return <>
        <div className="list_main">
            <div className="list_title">
                <label>User List</label>
                <BsThreeDotsVertical />
            </div>
            {user.map((item, index) => {
                return (
                    <div className="list_singlerow">
                        <div className="list_singlerow_circle">
                            <BsBellFill />
                        </div>
                        <div className="list_singlerow_name_and_icon">
                            <div className="list_singlerow_name" >
                                {
                                    <label >{(item.txtFirstName)}</label>
                                }
                            </div>
                            <div className="list_singlerow_role">
                                {
                                    <label >{item.txtRole}</label>
                                }
                            </div>
                            <div className="list_singlerow_button">
                                <button onClick={Pend(item)}>Pending</button>
                            </div>
                        </div>
                    </div>
                );
            })
            }
        </div>
    </>
}