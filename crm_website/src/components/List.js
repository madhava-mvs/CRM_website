import { BsThreeDotsVertical, BsBellFill } from "react-icons/bs";
import "./List.css";
export default function List({ user }) {


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
                            {
                                <label>{(item.txtFirstName)}</label>
                            }
                            <button>Pending</button>
                        </div>
                    </div>
                );
            })
            }

        </div>
    </>
}