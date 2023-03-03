import React from 'react';
import { AiFillGithub, AiFillApple, AiFillAndroid } from "react-icons/ai";
const App = () => {


    return (
        <div>
            <button className="btn m-2 btn-success"><AiFillApple></AiFillApple>Icon</button>
            <button className="btn m-2 btn-info"> <AiFillGithub></AiFillGithub>Icon</button>
            <button className="btn m-2 btn-danger"><AiFillAndroid></AiFillAndroid>Icon</button>
        </div>
    );
};

export default App;