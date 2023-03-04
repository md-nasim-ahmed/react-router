import React from 'react';
import ReactCodeInput from 'react-code-input';


const App = () => {

    return (
        <div>
            <ReactCodeInput onChange={(value) => { alert(value) }} type='number' fields={6} /><br />

        </div>
    );
};

export default App;