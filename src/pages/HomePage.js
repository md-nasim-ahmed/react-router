import { useRef } from "react";


const HomePage = () => {

    let UserName=useRef();
    let UserPassword=useRef()

    const SubmitForm=()=>{
        let a =UserName.current.value;
        let b=UserPassword.current.value;
        alert(a);
        alert(b);
    }
    
    return (
        <div>
          <input ref={UserName} placeholder="User Name" type="text"/>
          <input ref={UserPassword} placeholder="User Password" type="text"/>
          <button onClick={SubmitForm}>submit</button>
        </div>
    );
};

export default HomePage;