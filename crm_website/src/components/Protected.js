import { useEffect } from "react"
import { useNavigate } from "react-router-dom";




function Protected(props){
    const {Component}=props
    const navigate=useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem("userinfo");
        if (!login){
            navigate('/')
        }
    })
    return(
        <div>
            <Component/>
        </div>
    )
    }
export default Protected