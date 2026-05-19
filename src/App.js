import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import CV from './components/CV';
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
    backgroundColor: '#F0F4F8',
    color: '#0F172A',
  };

  const darkStyle = {
    backgroundColor: '#0A0F1C',
    color: '#E8EDF5',
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
            <Route path="/cv" element={<CV />} />
          </Routes>

          {/* Footer 也不需要传参 */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
