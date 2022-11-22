import { useState } from "react";
import "./Pop2.css";
export default function Pop2({comments}) {
    const [comments_value, setComments_value] = useState("")
    setComments_value(comments)
    return (
        <>
        <div className="messagebox">
        <input type="text" placeholder="comments" value={comments} onClick={(e)=>setComments_value(e.target.value)} />
        </div>
        </>
    );}