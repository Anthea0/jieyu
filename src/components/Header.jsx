import React from 'react';
import { NavLink } from 'react-router-dom'; // 引入路由链接组件
import { useTheme } from '../context/ThemeContext'; // 引入 Context（注意路径是 ../）

// 删除了所有传参
function Header() {
    // 从 Context 获取状态和切换函数
    const { isDarkMode, toggleTheme } = useTheme();
    
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? (isDarkMode ? '#E8EDF5' : '#0F172A') : (isDarkMode ? '#64748B' : '#94A3B8'),
        textDecoration: 'none',
        fontFamily: "'Hanken Grotesk', sans-serif",
        fontWeight: 400,
        fontSize: '0.9rem',
        letterSpacing: '0.03em',
        paddingBottom: '6px',
        position: 'relative',
    });

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '28px 0 16px 0',
            borderBottom: 'none'
        }}>
            <div style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1.7rem',
                fontWeight: 400,
                color: isDarkMode ? '#E8EDF5' : '#0F172A',
                letterSpacing: '0.01em'
            }}>
                Jie Yu
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '24px', margin: 0, padding: 0 }}>
                        {[
                            { to: '/', label: 'about' },
                            { to: '/projects', label: 'publications' },
                            { to: '/cv', label: 'cv' }
                        ].map(({ to, label }) => (
                            <li key={to} style={{ position: 'relative' }}>
                                <NavLink to={to} style={navLinkStyle} end={to === '/'}>
                                    {({ isActive }) => (
                                        <>
                                            {label}
                                            {isActive && (
                                                <span style={{
                                                    position: 'absolute',
                                                    bottom: '-2px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: '4px',
                                                    height: '4px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#0F172A',
                                                    display: 'block'
                                                }} />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        borderRadius: '50%',
                        width: '28px',
                        height: '28px',
                        cursor: 'pointer',
                        color: isDarkMode ? '#64748B' : '#94A3B8',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'color 0.2s'
                    }}
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </button>
            </div>
        </header>
    );
}

export default Header;