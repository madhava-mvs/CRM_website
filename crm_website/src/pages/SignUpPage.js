import Otp from "../components/Otp";
import Success from "../components/Alertsuccess";
import Signup from "../components/Signup";
import Failed from "../components/Alertfailed";
import axios from "axios";
import { useState } from "react";
export default function SignUpPage() {
  const [show2, setshow2] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show, setshow] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const [error6, setError6] = useState("");
  const [error7, setError7] = useState("");

  const [error, setError] = useState(false);
  const [Checkbox, setCheckbox] = useState(false);
  const [jobrole, setJobrole] = useState("");
  const SignUp = (e) => {

    setError("");



    // const selectElement = document.querySelector("#jobrole");
    // setJobrole(
    //   Number(selectElement.options[selectElement.selectedIndex].value)
    // );
    //console.log("job role====>" + jobrole);



// if(firstname==""){setError(true)}
// else if (email==""){setError(true)}
// else if (password==""){setError(true)}
// else if (repassword==""){setError(true)}
// else if (Checkbox==""){setError(true)}

    if (
      firstname == "" ||
      email == "" ||
      password == "" ||
      repassword == "" ||
      Checkbox == false
    ) {
      setError(true);
    } 
    else{
      setError1("");
      setError2("");
      setError3("");
      setError4("");
      setError5("");
      setError6("");
      setError7("")
      setCheckbox("");
    //   const url =
    //     "https://tkywgev296.execute-api.us-east-1.amazonaws.com/dev/signup";
    const url = "https://xegps3cqo7.execute-api.us-east-1.amazonaws.com/dev/signup"
      const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        repassword: repassword,
        jobrole: jobrole,
      }; 
      const headers = {};
      axios
        .post(url, data, {headers: headers})
        .then((res) => {
          console.log("response==>>" + JSON.stringify(res.data));
          let result = res.data + "";
          if (result.includes("firstname is mandatory"))
            setError1("Firstname is mandatory");
          if (result.includes("email already exists"))
            setError2("User already exists!");
          if (result.includes("email is mandatory"))
            setError6("Email is mandatory");
          if (result.includes("jobrole is mandatory"))
            setError7("jobrole is mandatory");
          if (result.includes("password is mandatory"))
            setError3("Password is mandatory");
          if (result.includes("repassword is mandatory"))
            setError4("Repassword is mandatory");
          if (result.includes("repassword not match"))
            setError5("Password not match");
          if (result.includes("user added")) setshow(true);
        })
        .catch((err) => {
          console.log("Error==>>" + JSON.stringify(err));
        });
    }
  };

  return (
    <>
      {show ? (
        <>
          <Otp setshow1={setshow1} setshow={setshow} setshow2={setshow2} />
        </>
      ) : (
        <></>
      )}
      {show2 ? (
        <>
          <Failed setshow2={setshow2} message={"Failed"} />
        </>
      ) : (
        <></>
      )}
      {/* show1 ? 
        <>
        <Success setshow1={setshow1} />
        </> :
         <>
        </>
*/}
      <Signup
        setshow={setshow}
        firstname={firstname}
        lastname={lastname}
        email={email}
        jobrole={jobrole}
        password={password}
        repassword={repassword}
        Checkbox={Checkbox}
        setFirstname={setFirstname}
        setLastname={setLastname}
        setPassword={setPassword}
        setEmail={setEmail}
        setJobrole={setJobrole}
        setRepassword={setRepassword}
        setCheckbox={setCheckbox}
        error={error}
        error1={error1}
        error2={error2}
        error3={error3}
        error4={error4}
        error5={error5}
        error6={error6}
        error7={error7}
        SignUp={SignUp}
      />
    </>
  );
}
