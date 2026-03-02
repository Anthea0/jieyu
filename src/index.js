import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 引入刚刚写好的 ThemeProvider
import { ThemeProvider } from './context/ThemeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 用 ThemeProvider 包裹 App */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);