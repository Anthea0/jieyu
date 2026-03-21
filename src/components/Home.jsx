import React from 'react';
// 1. 引入全局仓库
import { useTheme } from '../context/ThemeContext';

// 2. 删除了括号里的参数 (Props)
function Home() {
  // 3. 直接从仓库里获取暗黑模式状态
  const { isDarkMode } = useTheme(); 
  
  const pStyle = {
    color: isDarkMode ? '#b0b0b0' : '#333',
    fontSize: '1.1rem',
    marginBottom: '20px'
  };

  return (
    <main>
      <section className="bio-section" style={{ marginTop: '20px' }}>
        <div className="bio-text">
          <p style={pStyle}>
            Welcome! I'm a 1st year PhD Student in Computational Media and Arts at HKUST(GZ). 
            I am advised by Prof. Xin Tong at ARK Lab.
          </p>
          <p style={pStyle}>
            My research interests lie in human-robot interaction, and mechanical design, with a strong passionate on embodied AI, and companion robotics.
            My work aims to develop adaptive and interactive robotic systems that seamlessly integrate into human environments, enhancing both autonomy and user experience.
          </p>
          
          <div style={{ marginTop: '40px', padding: '15px', background: isDarkMode ? '#222' : '#f9f9f9', borderRadius: '5px', border: isDarkMode ? '1px solid #333' : 'none' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', fontWeight: 'bold', color: isDarkMode ? '#ccc' : '#333' }}>♫ The songs I've been listening to a lot lately:</p>
            <audio controls className="audio-player" style={{ width: '100%' }}>
              <source src="/audio/Is+There+Someone+Else-The+Weeknd.mp3" type="audio/mpeg" />
              Your browser does not support audio.
            </audio>
          </div>
        </div>

        <div className="bio-photo">
          <img src="/img/myphoto.jpg" alt="Profile" className="profile-pic" style={{ width: '100%', maxWidth: '300px' }} />
          <div className="contact-info" style={{ color: isDarkMode ? '#aaa' : '#555', marginTop: '15px', textAlign: 'left', paddingLeft: '10px' }}>
            <p style={{ margin: '2px 0' }}>No.1 Duxue Road</p>
            <p style={{ margin: '2px 0' }}>Guangzhou, China</p>
            <p style={{ margin: '2px 0', marginTop: '10px' }}>jyu361 at connect.hkust-gz.edu.cn</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '50px' }}>
        <h2 className="section-title" style={{ borderBottomColor: isDarkMode ? '#444' : '#eee', color: isDarkMode ? '#fff' : '#000', paddingBottom: '10px' }}>news</h2>
        <ul className="news-list">
          <li className="news-item">
            <div className="news-date" style={{ color: isDarkMode ? '#fff' : '#000', fontWeight: 'bold' }}>Feb 08, 2026</div>
            <div className="news-content" style={{ color: isDarkMode ? '#aaa' : '#444' }}>
              Completed the redesign of my personal portfolio website using semantic HTML and CSS.
            </div>
          </li>
          <li className="news-item">
            <div className="news-date" style={{ color: isDarkMode ? '#fff' : '#000', fontWeight: 'bold' }}>Jan 16, 2026</div>
            <div className="news-content" style={{ color: isDarkMode ? '#aaa' : '#444' }}>
              One co-authored paper is conditionally accepted to <i style={{color: '#a800d6'}}>CHI 2026</i>! Excited to present soon in Barcelona, Spain!
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
