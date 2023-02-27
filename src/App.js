import React from 'react';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const App = () => {

 let HTMLString="<h1>Hello</h1>"

  return (
    <div> 
      {ReactHtmlParser(HTMLString)}
    </div>
  );
};

export default App;

