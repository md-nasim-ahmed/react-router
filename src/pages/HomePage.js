import React, { useState } from 'react';

const HomePage = () => {

    const[color,setcolor]=useState("red");

    return (
        <div>
            <h1>{color}</h1>
        </div>
    );
};

export default HomePage;