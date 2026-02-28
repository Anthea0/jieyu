import React from 'react';

function Header({ currentPage, setCurrentPage, isDarkMode, setIsDarkMode }) {
    const linkColor = isDarkMode ? '#aaa' : '#555';
    const activeColor = isDarkMode ? '#fff' : '#000';
    
    // 切换主题的函数
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '40px 0 20px 0',
            borderBottom: 'none' // 去掉底边框，更贴近参考图的极简风
        }}>
            {/* 左侧：把 Logo 变成你的名字 */}
            <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>
                Jie <span style={{ fontWeight: 300 }}>Yu</span>
            </div>
            
            {/* 右侧：导航链接 + 太阳/月亮按钮 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                        <li>
                            <a href="#about" 
                               style={{ color: currentPage === 'about' ? activeColor : linkColor, textDecoration: 'none' }}
                               onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>
                               about
                            </a>
                        </li>
                        <li>
                            <a href="#projects" 
                               style={{ color: currentPage === 'projects' ? activeColor : linkColor, textDecoration: 'none' }}
                               onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>
                               projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" 
                               style={{ color: currentPage === 'contact' ? activeColor : linkColor, textDecoration: 'none' }}
                               onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>
                               contact
                            </a>
                        </li>
                    </ul>
                </nav>
                
                {/* 开关按钮完美对齐到最右侧，并参考暗黑模式图加上了淡淡的边框 */}
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