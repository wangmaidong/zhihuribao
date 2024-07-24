import React from 'react';
import ReactDOM from 'react-dom/client';
import 'lib-flexible'
import './index.less';
const root = ReactDOM.createRoot(document.getElementById('root'));
/* 处理最大宽度 */
(function () {
  const handleMax = function handleMax() {
    let html = document.documentElement,
      root = document.getElementById('root'),
      deviceW = html.clientWidth;
    root.style.maxWidth = "750px";
    if (deviceW >= 750) {
      html.style.fontSize = '75px';
    }
  };
  handleMax();
})();
root.render(
  <>
    <div className='box'>
      知乎日报
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
