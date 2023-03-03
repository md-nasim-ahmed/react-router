import React from 'react';
import readXlsxFile from 'read-excel-file'

const App = () => {
    const Readfile = () => {
        let myfile = document.getElementById("myfile")

        readXlsxFile(myfile.files[0]).then((data) => {
            alert(data)
        })

    }

    return (
        <div>
            <input id="myfile" className="m-2 form-control" type="file"></input>
            <button onClick={Readfile} className="btn m-2 btn-danger">Read excel</button>
        </div>
    );
};

export default App;