import React, { useState } from 'react';

function Gallery({ project, isDarkMode }) {
  const [showAbs, setShowAbs] = useState(false);

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
    backgroundColor: project.badgeColor || '#333', // 动态读取你设置的颜色
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
    <div style={cardStyle}>
      
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