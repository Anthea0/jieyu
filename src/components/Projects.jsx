import React from 'react';
import Gallery from './Gallery';
// 1. 引入仓库
import { useTheme } from '../context/ThemeContext';

// 2. 删掉括号里的参数
function Projects() {

  // 3. 接入 Context
  const { isDarkMode } = useTheme();

  const publicationsByYear = [
    {
      year: "2026",
      projects: [
        {
          id: 1,
          badge: "CHI",
          badgeColor: "#e86e96",
          title: "From Tool to Partner: Expressive Behaviors as the Bridge to Human-Robot Creative Collaboration",
          authors: <><span style={{textDecoration: 'underline'}}>Jie Yu</span>*, Xinyi Zhang*, Yaqiong Luo, Ray LC, Kaishun Wu, Xin Tong, </>,
          venue: "In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, Barcelona, Spain, 2026",
          image: "/img/chi26-8-fig1.jpg",
          abstract: "Human–robot creative collaboration is often constrained by command–response paradigms that position robots as tools rather than partners. While expressive robotics has shown social values, its role and behaviors in shaping creative partnerships with humans remains underexplored. Therefore, we investigate how robots' expressive behaviors influence co-creative engagement.",
          links: [
            { name: "ABS", url: null },
            { name: "PDF", url: "https://dl.acm.org/doi/full/10.1145/3772318.3790270" },
            { name: "VIDEO", url: "#" }
          ]
        }
      ]
    },
    {
      year: "2025",
      projects: [
        {
          id: 2,
          badge: "SIGGRAPH Asia",
          badgeColor: "#8b00ff",
          title: "SofiBuddy: A Soft Mobile Interface for On-Body Interaction",
          authors: <>Yixuan Li, <span style={{textDecoration: 'underline'}}>Jie Yu</span>, Chenwan Halley Zhong, Zhaowen Deng, Teng Han, Yi Cai, and Xin Tong.</>,
          venue: "In Proceedings of the SIGGRAPH Asia 2025 Posters, Hongkong, China, 2026",
          image: "/img/SA.png",
          abstract: "A soft mobile interface with a lightweight transition module and a curvature-based inflatable actuator, offering gentle body conforming motion with interactive potential for companionship, assistance, and VR engagement.",
          links: [
            { name: "PDF", url: "https://dl.acm.org/doi/10.1145/3757374.3771432" }
          ]
        }
      ]
    }
  ];

  const colors = {
    heading: isDarkMode ? '#E8EDF5' : '#0F172A',
    subtle: isDarkMode ? '#64748B' : '#64748B',
    divider: isDarkMode ? '#1E2A3A' : '#D8D2C4',
    yearLabel: isDarkMode ? '#334155' : '#94A3B8',
  };

  return (
    <main style={{ marginTop: '20px' }}>
      <div style={{ marginBottom: '56px' }}>
        <h1 style={{
          margin: '0 0 10px 0',
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: '2.4rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: colors.heading,
          lineHeight: 1.1
        }}>
          publications
        </h1>
        <p style={{ margin: 0, color: colors.subtle, fontSize: '0.88rem', fontFamily: "'Hanken Grotesk', sans-serif", letterSpacing: '0.02em' }}>
          in reversed chronological order
        </p>
      </div>

      {publicationsByYear.map((yearGroup, index) => (
        <div key={index}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '36px',
            marginTop: index === 0 ? '0' : '64px',
            gap: '16px'
          }}>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 400,
              color: colors.subtle,
              letterSpacing: '0.08em',
              flexShrink: 0
            }}>
              {yearGroup.year}
            </span>
            <hr style={{
              flex: 1,
              border: 'none',
              borderTop: `1px dashed ${colors.divider}`,
              margin: 0
            }} />
          </div>

          {yearGroup.projects.map((proj) => (
            // 4. 注意这里！之前是 <Gallery project={proj} isDarkMode={isDarkMode} />
            // 现在 Gallery 自己会去拿 isDarkMode，所以不用传了
            <Gallery key={proj.id} project={proj} />
          ))}

        </div>
      ))}
    </main>
  );
}

export default Projects;