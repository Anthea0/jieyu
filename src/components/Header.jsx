import React from 'react';
import { NavLink } from 'react-router-dom'; // 引入路由链接组件
import { useTheme } from '../context/ThemeContext'; // 引入 Context（注意路径是 ../）

// 删除了所有传参
function Header() {
    // 从 Context 获取状态和切换函数
    const { isDarkMode, toggleTheme } = useTheme();
    
    // 自定义链接样式，根据当前是否激活 (isActive) 来变色
    const getLinkStyle = ({ isActive }) => ({
        color: isActive ? (isDarkMode ? '#fff' : '#000') : (isDarkMode ? '#aaa' : '#555'),
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal'
    });

    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '40px 0 20px 0',
            borderBottom: 'none'
        }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>
                Jie <span style={{ fontWeight: 300 }}>Yu</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                        <li>
                            <NavLink to="/" style={getLinkStyle}>about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" style={getLinkStyle}>projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" style={getLinkStyle}>contact</NavLink>
                        </li>
                    </ul>
                </nav>
                
                <button 
                    onClick={toggleTheme}
                    style={{
                        background: 'transparent',
                        border: isDarkMode ? '1px solid #555' : 'none',
                        borderRadius: '6px',
                        padding: '4px 8px',
                        cursor: 'pointer',
                        color: isDarkMode ? '#fff' : '#333',
                        fontSize: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {isDarkMode ? '🌙' : '☀'}
                </button>
            </div>
        </header>
    );
}

export default Header;