import React from 'react';
// 1. 引入全局仓库
import { useTheme } from '../context/ThemeContext';

// 2. 删除了括号里的参数 (Props)
function Home() {
  // 3. 直接从仓库里获取暗黑模式状态
  const { isDarkMode } = useTheme();

  const colors = {
    text: isDarkMode ? '#B8C4D8' : '#334155',
    heading: isDarkMode ? '#E8EDF5' : '#0F172A',
    subtle: isDarkMode ? '#64748B' : '#64748B',
    bg: isDarkMode ? '#0A0F1C' : '#F0F4F8',
    audioBg: isDarkMode ? '#111827' : '#E2E8F0',
    divider: isDarkMode ? '#1E2A3A' : '#CBD5E1',
  };

  const pStyle = {
    color: colors.text,
    fontSize: '1.05rem',
    marginBottom: '18px',
    lineHeight: '1.75'
  };

  const linkStyle = {
    color: isDarkMode ? '#94A3B8' : '#64748B',
    textDecoration: 'none',
    borderBottom: `1px solid ${isDarkMode ? '#475569' : '#94A3B8'}`,
    paddingBottom: '1px',
    transition: 'border-color 0.2s, color 0.2s',
  };

  const keywordStyle = {
    color: isDarkMode ? '#94A3B8' : '#334155',
    fontWeight: 600,
    borderBottom: `1px solid ${isDarkMode ? '#475569' : '#94A3B8'}`,
    paddingBottom: '1px',
  };

  return (
    <main>
      <section className="bio-section" style={{ marginTop: '8px' }}>

        {/* 左列：bio + news */}
        <div className="bio-text">
          <p style={pStyle}>
            I'm a 1st year PhD Student in Computational Media and Arts at HKUST(GZ).
            I am advised by Prof.{' '}
            <a href="https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page?id=435" target="_blank" rel="noreferrer" style={linkStyle}>Xin Tong</a>
            {' '}at{' '}
            <a href="https://arkxlab.github.io/index.html" target="_blank" rel="noreferrer" style={linkStyle}>ARK Lab</a>.
          </p>
          <p style={pStyle}>
            My research interests lie in{' '}
            <span style={keywordStyle}>human-robot interaction</span>, and{' '}
            <span style={keywordStyle}>mechanical design</span>, with a strong passion for{' '}
            <span style={keywordStyle}>embodied AI</span>, and{' '}
            <span style={keywordStyle}>companion robotics</span>.
            My work aims to develop adaptive and interactive robotic systems that seamlessly
            integrate into human environments, enhancing both autonomy and user experience.
          </p>

          <h2 className="section-title" style={{ marginTop: '36px' }}>news</h2>
          <ul className="news-list" style={{ marginTop: '20px' }}>
            <li className="news-item">
              <div className="news-date">Feb 08, 2026</div>
              <div className="news-content" style={{ color: colors.text }}>
                Completed the redesign of my personal portfolio website.
              </div>
            </li>
            <li className="news-item">
              <div className="news-date">Jan 16, 2026</div>
              <div className="news-content" style={{ color: colors.text }}>
                One co-authored paper is conditionally accepted to{' '}
                <span style={{ color: colors.heading, fontWeight: 500 }}>CHI 2026</span>! Excited to present in Barcelona, Spain.
              </div>
            </li>
          </ul>
        </div>

        {/* 右列：照片 + 联系方式 */}
        <div className="bio-photo">
          <img src="/img/myphoto.jpg" alt="Profile" className="profile-pic" style={{ width: '100%', maxWidth: '240px' }} />
          <div className="contact-info" style={{ color: colors.subtle, marginTop: '14px', textAlign: 'center' }}>
            <p style={{ margin: '0' }}>jyu361@connect.hkust-gz.edu.cn</p>
          </div>
        </div>

      </section>
    </main>
  );
}

export default Home;
