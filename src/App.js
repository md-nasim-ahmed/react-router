import React from 'react';
import exportFromJSON from 'export-from-json'
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const App = () => {

    const DownloadCsv=()=>{
          const data=[
            {name:"Nasim",city:"dhaka"},
            {name:"Bulbul",city:"narail"}
          ]
          
          const Filename ='myCsv';
          const exportType=exportFromJSON.types.csv

          exportFromJSON({data,Filename,exportType})
    }


  return (
    <div> 
      <button onClick={DownloadCsv} className='btn btn-danger'>Download CSV</button>
    </div>
  );
};

export default App;

