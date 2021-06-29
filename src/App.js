import React, { useEffect } from 'react';
import './App.css';


function App({ domElement }) {
  

  return (
    <div className='widget_preview'>
      <h5>WIDGET</h5>
      <br/>
      <div className='latest_download'>
        <h4>Latest downloads</h4>
        <div className='latest_download_content'>
          <ul>
            <li>04 Jan</li>
            <li>
              <img
                src="chrome_icon.png"
                alt=''
                className='img-fluid'
              />
              <a href='/#'>google chrome 28.0.1500.95</a>
            </li>
            <li>
              <img
                src="utorrent.png"
                alt=''
                className='img-fluid'
              />
              <a href='/#'>utorrent 3.3.1 build 29988</a>
            </li>
            <li>03 Jan</li>
            <li>
              <img
                src="chrome_icon.png"
                alt=''
                className='img-fluid'
              />
              <a href='/#'>google chrome 28.0.1500.95</a>
            </li>
            <li>
              <img
                src="utorrent.png"
                alt=''
                className='img-fluid'
              />
              <a href='/#'>utorrent 3.3.1 build 29988</a>
            </li>
            <li>
              <img
                src="utorrent.png"
                alt=''
                className='img-fluid'
              />
              <a href='/#'>utorrent 3.3.1 build 29988</a>
            </li>
            <li>
              <img
                src="utorrent.png"
                alt=''
                className='img-fluid'
              />
              <a href='/#'>utorrent 3.3.1 build 29988</a>
            </li>
            <li>01 Jan</li>
            <li>
              <img
                src="chrome_icon.png"
                alt=''
                className='img-fluid'
              />
              <a href='/#'>google chrome 28.0.1500.95</a>
            </li>
            <li>Powered by filehippo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
