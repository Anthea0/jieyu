import React, { useState, useRef } from 'react';
// 引入 Assignment 1 的自定义 Hook
import useClickPosition from '../hooks/useClickPosition'; 
// 引入 Assignment 2 的 ThemeContext
import { useTheme } from '../context/ThemeContext'; 

// 删除了 isDarkMode prop，现在由 Context 提供
function Gallery({ project }) {
  const [showAbs, setShowAbs] = useState(false);
  
  // Assignment 1: 创建一个 ref 用于绑定当前的卡片 DOM 元素
  const cardRef = useRef(null); 
  
  // Assignment 2: 直接从 Context 中获取 isDarkMode，告别一层层传参
  const { isDarkMode } = useTheme(); 

  // Assignment 1: 启用点击位置记录 Hook。用 project.badge (如 "CHI") 作为该区域的日志名称
  useClickPosition(project.badge || "Project Card", cardRef);

  const cardStyle = {
    display: 'flex',
    gap: '30px',
    marginBottom: '50px',
    alignItems: 'flex-start'
  };

  // 左侧图片容器（用于将 Badge 和图片打包在一起）
  const imageContainerStyle = {
    width: '240px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px' // 标签和图片之间的间距
  };

  // 复刻截图里的彩色会议标签
  const badgeStyle = {
    backgroundColor: project.badgeColor || '#333', // 动态读取设置的颜色
    color: '#fff',
    padding: '4px 0',
    textAlign: 'center',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    letterSpacing: '1px'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '4px',
    border: isDarkMode ? '1px solid #333' : '1px solid #eee',
    boxShadow: isDarkMode ? '0 2px 8px rgba(255,255,255,0.05)' : '0 2px 8px rgba(0,0,0,0.05)',
  };

  const textStyle = {
    color: isDarkMode ? '#bbb' : '#444',
    lineHeight: '1.5'
  };

  const btnStyle = {
    padding: '4px 10px',
    border: isDarkMode ? '1px solid #555' : '1px solid #ccc',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'transparent',
    color: isDarkMode ? '#ddd' : '#333',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.2s ease',
  };

  return (
    // Assignment 1: 将 ref 绑定到最外层的 div 上，这样点击整个卡片区域都会被 Hook 监听到
    <div style={cardStyle} ref={cardRef}>
      
      {/* 左侧：彩色标签 + 缩略图 */}
      <div style={imageContainerStyle}>
        {/* 如果数据里有 badge，就渲染这个标签 */}
        {project.badge && (
          <div style={badgeStyle}>{project.badge}</div>
        )}
        <img src={project.image} alt="Thumbnail" style={imageStyle} />
      </div>

      {/* 右侧：学术信息流 */}
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: '500', color: isDarkMode ? '#fff' : '#000' }}>
          {project.title}
        </h3>
        
        <p style={{ margin: '0 0 4px 0', fontSize: '1rem', ...textStyle }}>
          {project.authors}
        </p>
        
        <p style={{ margin: '0 0 15px 0', fontSize: '1rem', fontStyle: 'italic', ...textStyle }}>
          {project.venue}
        </p>
        
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {/* ABS 按钮 */}
          <button 
            onClick={() => setShowAbs(!showAbs)} 
            style={{
              ...btnStyle, 
              backgroundColor: showAbs ? (isDarkMode ? '#555' : '#eee') : 'transparent'
            }}
          >
            ABS
          </button>
          
          {/* 渲染其他按钮 */}
          {project.links.filter(link => link.name !== 'ABS').map((link, index) => (
            <a key={index} href={link.url} style={btnStyle}>
              {link.name}
            </a>
          ))}
        </div>

        {/* 展开的摘要区 */}
        {showAbs && (
          <div style={{ 
            marginTop: '15px', 
            padding: '12px 15px', 
            backgroundColor: isDarkMode ? '#222' : '#f9f9f9',
            borderLeft: isDarkMode ? '3px solid #555' : '3px solid #ccc',
            fontSize: '0.95rem',
            ...textStyle
          }}>
            <strong>Abstract: </strong>{project.abstract}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;