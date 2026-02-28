import React from 'react';
import Gallery from './Gallery';

function Projects({ isDarkMode }) {
  
  // 进阶学术风格：按年份分组的数据结构，并加入了 badge (会议标签)
  const publicationsByYear = [
    {
      year: "2026",
      projects: [
        {
          id: 1,
          badge: "CHI",
          badgeColor: "#e86e96", // 参考截图里的 CHI 樱花粉
          title: "From Tool to Partner: Expressive Behaviors as the Bridge to Human-Robot Creative Collaboration",
          authors: <><span style={{textDecoration: 'underline'}}>Jie Yu</span>*, Xinyi Zhang*, Yaqiong Luo, Ray LC, Kaishun Wu, Xin Tong, </>,
          venue: "In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, Barcelona, Spain, 2026",
          image: "/img/chi26-8-fig1.jpg",
          abstract: "Human–robot creative collaboration is often constrained by command–response paradigms that position robots as tools rather than partners. While expressive robotics has shown social values, its role and behaviors in shaping creative partnerships with humans remains underexplored. Therefore, we investigate how robots' expressive behaviors influence co-creative engagement.",
          links: [
            { name: "ABS", url: null }, // ABS由内部按钮接管，这里可以空着或者用作占位
            { name: "PDF", url: "#" },
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
          badgeColor: "#8b00ff", // 参考截图里的 UIST 亮紫色
          title: "SofiBuddy: A Soft Mobile Interface for On-Body Interaction",
          authors: <>Yixuan Li, <span style={{textDecoration: 'underline'}}>Jie Yu</span>, Chenwan Halley Zhong, Zhaowen Deng, Teng Han, Yi Cai, and Xin Tong.</>,
          venue: "In Proceedings of the SIGGRAPH Asia 2025 Posters, Hongkong, China, 2026",
          image: "/img/SA.png",
          abstract: "A soft mobile interface with a lightweight transition module and a curvature-based inflatable actuator, offering gentle body conforming motion with interactive potential for companionship, assistance, and VR engagement.",
          links: [
            { name: "PDF", url: "https://dl.acm.org/doi/10.1145/3757374.3771432" },
            // { name: "VIDEO", url: "" },
            // { name: "CODE", url: "#"}
          ]
        }
      ]
    }
  ];

  return (
    <main style={{ marginTop: '20px' }}>
      
      {/* 1. 完美复刻截图的顶部标题区 */}
      <div style={{ marginBottom: '50px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem', fontWeight: '300', color: isDarkMode ? '#fff' : '#000' }}>
          publications
        </h1>
        <p style={{ margin: 0, color: isDarkMode ? '#888' : '#666', fontSize: '0.95rem' }}>
          publications by categories in reversed chronological order.
        </p>
      </div>
      
      {/* 2. 遍历年份数组 */}
      {publicationsByYear.map((yearGroup, index) => (
        <div key={index}>
          
          {/* 3. 极简年份分割线：左侧画线，右侧大字体年份 */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '40px', 
            marginTop: index === 0 ? '0' : '60px' // 第一个年份上边距为0
          }}>
            {/* 这里的 hr 就是那条水平线 */}
            <hr style={{ 
              flex: 1, 
              border: 'none', 
              borderTop: isDarkMode ? '1px solid #333' : '1px solid #eaeaea', 
              margin: 0 
            }} />
            <span style={{ 
              marginLeft: '20px', 
              fontSize: '2.5rem', 
              fontWeight: '300', 
              color: isDarkMode ? '#444' : '#e0e0e0', // 暗模式用深灰，亮模式用浅灰，还原那种若隐若现的高级感
              lineHeight: '1'
            }}>
              {yearGroup.year}
            </span>
          </div>

          {/* 4. 遍历渲染该年份下的所有 Project */}
          {yearGroup.projects.map((proj) => (
            <Gallery key={proj.id} project={proj} isDarkMode={isDarkMode} />
          ))}

        </div>
      ))}
    </main>
  );
}

export default Projects;