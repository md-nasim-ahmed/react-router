import React from 'react';
import localforage from 'localforage';
import cogoToast from 'cogo-toast';

const App = () => {

    const setData = () => {
        localforage.setItem("name", "Bulbul", function (err) {
            if (err) {
                cogoToast.error(err)
            } else {
                cogoToast.success("Data save success")
            }
        })
    }
    const getData = () => {
        localforage.getItem("name", function (err, value) {
            if (err) {
                cogoToast.error(err)
            } else {
                alert(value)
            }
        })
    }
    const removeData = () => {
        localforage.removeItem("name", function (err) {
            if (err) {
                cogoToast.error(err)
            } else {
                cogoToast.success("Data remove success")
            }
        })

    }
    return (
        <div>
            <button className="btn m-2 btn-success" onClick={setData}>Set Data</button>
            <button className="btn m-2 btn-info" onClick={getData}>Get Data</button>
            <button className="btn m-2 btn-danger" onClick={removeData}>Remove Data</button>
        </div>
    );
};

export default App;