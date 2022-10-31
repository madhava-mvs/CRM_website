import Otp from "../components/Otp"
import Success from "../components/Alertsuccess"
import Signup from "../components/Signup"
import Failed from "../components/Alertfailed"
import axios from "axios"
import { useState } from "react"
export default function SignUpPage() {
    const [show2, setshow2] = useState(false)
    const [show1, setshow1] = useState(false)
    const [show, setshow] = useState(false)
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
     
    const [error1, setError1] = useState("")
    const [error2, setError2] = useState("")
    const [error3, setError3] = useState("")
    const [error4, setError4] = useState("")
    const [error5, setError5] = useState("")
    const [error6, setError6] = useState("")
    const [error, setError] = useState(false)
    const [Checkbox, setCheckbox] = useState(false)
    const SignUp = e => {
        setError("")

        if (firstname == "" || email == "" || password == "" || repassword == "" || Checkbox == false) {
            setError(true)
        } else if (firstname != "" && email != "" && password != "" && repassword != "" && Checkbox != false) {
            setError1("")
            setError2("")
            setError3("")
            setError4("")
            setError5("")
            setError6("")
            setCheckbox("")
            const url = "http://localhost:3000/dev/signup";
            const data = { firstname: firstname, lastname: lastname, email: email, password: password, repassword: repassword };
            const header = {};
            axios.post(url, data, header)
                .then((res) => {
                    console.log("response==>>" + JSON.stringify(res.data))
                    let result = res.data + ""
                    if (result.includes("firstname is mandatory"))
                        setError1("Firstname is mandatory")
                    if (result.includes("email already exists"))
                        setError2("User already exists!")
                    if (result.includes("email is mandatory"))
                        setError6("Email is mandatory")
                    if (result.includes("password is mandatory"))
                        setError3("Password is mandatory")
                    if (result.includes("repassword is mandatory"))
                        setError4("Repassword is mandatory")
                    if (result.includes("repassword not match"))
                        setError5("Password not match")
                     if(result.includes("user added"))   
                     setshow(true)
                })
                .catch((err) => {
                    console.log("Error==>>" + JSON.stringify(err))
                })
        }
    }
   
    
    return <>
        {show ?
            <>
                <Otp setshow1={setshow1} setshow={setshow} setshow2={setshow2} />
            </> :
            <>
            </>
        }
        {  
            show2 ?
                <>
                    <Failed setshow2={setshow2} message={"Failed"} /></> : <></>
        }
        {/* show1 ? 
        <>
        <Success setshow1={setshow1} />
        </> :
         <>
        </>
*/}
        <Signup setshow={setshow} firstname={firstname} lastname={lastname} email={email} password={password} repassword={repassword} Checkbox={Checkbox} setFirstname={setFirstname} setLastname={setLastname} setPassword={setPassword} setEmail={setEmail} setRepassword={setRepassword} setCheckbox={setCheckbox} error={error} error1={error1} error2={error2} error3={error3} error4={error4} error5={error5} error6={error6}  SignUp={SignUp}/>
    </>
}