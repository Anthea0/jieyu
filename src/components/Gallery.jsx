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

  const colors = {
    heading: isDarkMode ? '#E8EDF5' : '#0F172A',
    text: isDarkMode ? '#B8C4D8' : '#334155',
    subtle: isDarkMode ? '#64748B' : '#64748B',
    border: isDarkMode ? '#1E2A3A' : '#D8D2C4',
    accentBorder: isDarkMode ? '#94A3B8' : '#0F172A',
    absBg: isDarkMode ? '#111827' : '#E2E8F0',
    btnBorder: isDarkMode ? '#2A3547' : '#CBD5E1',
    btnText: isDarkMode ? '#94A3B8' : '#64748B',
  };

  const cardStyle = {
    display: 'flex',
    gap: '28px',
    marginBottom: '52px',
    alignItems: 'flex-start',
    paddingLeft: '16px',
    borderLeft: `2px solid ${colors.border}`,
    transition: 'border-color 0.25s ease',
  };

  const imageContainerStyle = {
    width: '220px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const badgeStyle = {
    backgroundColor: project.badgeColor || '#333',
    color: '#fff',
    padding: '3px 8px',
    borderRadius: '2px',
    fontSize: '0.7rem',
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 400,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    display: 'inline-block',
    alignSelf: 'flex-start'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '6px',
    border: `1px solid ${colors.border}`,
    boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 12px rgba(28,25,23,0.07)',
  };

  const btnStyle = {
    padding: '3px 10px',
    border: `1px solid ${colors.btnBorder}`,
    borderRadius: '2px',
    cursor: 'pointer',
    background: 'transparent',
    color: colors.btnText,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: '0.68rem',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.2s ease',
  };

  return (
    <div
      style={cardStyle}
      ref={cardRef}
      onMouseEnter={e => e.currentTarget.style.borderColor = colors.accentBorder}
      onMouseLeave={e => e.currentTarget.style.borderColor = colors.border}
    >
      <div style={imageContainerStyle}>
        {project.badge && (
          <div style={badgeStyle}>{project.badge}</div>
        )}
        <img src={project.image} alt="Thumbnail" style={imageStyle} />
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{
          margin: '0 0 10px 0',
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '1.05rem',
          lineHeight: '1.45',
          color: colors.heading
        }}>
          {project.title}
        </h3>

        <p style={{ margin: '0 0 4px 0', fontSize: '0.92rem', color: colors.text, lineHeight: '1.6' }}>
          {project.authors}
        </p>

        <p style={{ margin: '0 0 16px 0', fontSize: '0.88rem', fontStyle: 'italic', color: colors.subtle, lineHeight: '1.5' }}>
          {project.venue}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowAbs(!showAbs)}
            style={{
              ...btnStyle,
              backgroundColor: showAbs ? colors.absBg : 'transparent',
              borderColor: showAbs ? colors.accentBorder : colors.btnBorder,
              color: showAbs ? colors.accentBorder : colors.btnText,
            }}
          >
            ABS
          </button>

          {project.links.filter(link => link.name !== 'ABS').map((link, index) => (
            <a key={index} href={link.url} style={btnStyle}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = colors.accentBorder; e.currentTarget.style.borderColor = colors.accentBorder; e.currentTarget.style.color = isDarkMode ? '#0A0F1C' : '#F5F2E9'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = colors.btnBorder; e.currentTarget.style.color = colors.btnText; }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {showAbs && (
          <div style={{
            marginTop: '14px',
            padding: '12px 14px',
            backgroundColor: colors.absBg,
            borderLeft: `2px solid ${colors.accentBorder}`,
            borderRadius: '0 4px 4px 0',
            fontSize: '0.88rem',
            color: colors.text,
            lineHeight: '1.65'
          }}>
            {project.abstract}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;