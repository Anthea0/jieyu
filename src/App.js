import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
// 引入 Context
import { useTheme } from './context/ThemeContext';

function App() {
  // 直接从 Context 中拿暗黑状态，不用再自己写 useState 了
  const { isDarkMode } = useTheme();

  const baseStyle = {
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  const lightStyle = {
    backgroundColor: '#ffffff',
    color: '#000000',
  };

  const darkStyle = {
    backgroundColor: '#121212',
    color: '#ffffff',
  };

  const appStyle = {
    ...baseStyle,
    ...(isDarkMode ? darkStyle : lightStyle)
  };

  return (
    // 使用 Router 包裹
    <Router>
      <div style={appStyle}>
        <div className="container">
          {/* Header 不再需要传任何参数 */}
          <Header />
          
          {/* 定义路由规则 */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 满足 Assignment 3：将原 Projects 组件映射到 /gallery 路径 */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          {/* Footer 也不需要传参 */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;