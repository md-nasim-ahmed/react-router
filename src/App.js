import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import React from 'react';

const App = () => {

    const DownloadImg = () => {
        let node = document.getElementById('tableList')
        htmlToImage.toPng(node).then((dataUrl) => {
            let img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
            <div id="tableList" className="container">
                <div className="row">
                    <div className="col-12">
                        <table>
                            <tr>
                                <td>Nasim</td>
                                <td>Dhaka</td>
                            </tr>
                            <tr>
                                <td>BULBUL</td>
                                <td>Dhaka</td>
                            </tr>
                            <tr>
                                <td>Nasim</td>
                                <td>Dhaka</td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
            <button onClick={DownloadImg} className='btn btn-danger m-5'>Download Image</button>
        </div>
    );
};

export default App;