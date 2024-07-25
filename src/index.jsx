import React from 'react';
import ReactDOM from 'react-dom/client';
// 改变html.fontSize
import 'lib-flexible'
// 引入全局的样式
import './index.less';

/* ANTD-MOBILE */
import { ConfigProvider } from "antd-mobile";
import zhCN from 'antd-mobile/es/locales/zh-CN'

// 引入App根组件
import App from './App.jsx'
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
  <ConfigProvider locale={zhCN}>
    <App>
    </App>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
