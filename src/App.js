import React from 'react';
import Cleave from 'cleave.js/react';


const App = () => {

    return (
        <div>
            <Cleave options={{ date: true, delimiter: '/', datePattern: ['d', 'm', 'y'] }}></Cleave>
        </div>
    );
};

export default App;