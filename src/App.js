import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 展开语法 (...) 进行样式管理
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

  // 三元运算符 (?:) 决定当前使用哪种模式
  const appStyle = {
    ...baseStyle,
    ...(isDarkMode ? darkStyle : lightStyle)
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      case 'projects':
        return <Projects isDarkMode={isDarkMode} />;
      case 'contact':
        return <Contact isDarkMode={isDarkMode} />;
      default:
        return <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
    }
  };

  return (
    <div style={appStyle}>
      <div className="container">
        {/* 把 isDarkMode 传给 Header，用来修复顶部导航栏看不清的问题 */}
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        {renderPage()}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;