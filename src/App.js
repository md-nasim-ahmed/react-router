import cogoToast from 'cogo-toast';
import React from 'react';

// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const App = () => {

  const ErrorToast=()=>{
      cogoToast.error('Error')
  }
    const SuccessToast=()=>{
      cogoToast.success('success')
    }
  return (
    <div> 
      <button onClick={ErrorToast} className='btn btn-danger'>Error</button>
      <button onClick={SuccessToast} className='btn btn-success'>Success</button>
    </div>
  );
};

export default App;

