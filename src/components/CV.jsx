import React from 'react';
import { useTheme } from '../context/ThemeContext';

function CV() {
  const { isDarkMode } = useTheme();

  const colors = {
    heading: isDarkMode ? '#E8EDF5' : '#0F172A',
    subtle: isDarkMode ? '#64748B' : '#64748B',
    border: isDarkMode ? '#1E2A3A' : '#CBD5E1',
    bg: isDarkMode ? '#111827' : '#E2E8F0',
  };

  return (
    <main style={{ marginTop: '8px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{
          margin: '0 0 8px 0',
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: '2.4rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: colors.heading,
          lineHeight: 1.1
        }}>
          cv
        </h1>
        <p style={{ margin: 0, color: colors.subtle, fontSize: '0.88rem', letterSpacing: '0.02em' }}>
          curriculum vitae
        </p>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
        border: `1px dashed ${colors.border}`,
        borderRadius: '8px',
        backgroundColor: colors.bg,
        flexDirection: 'column',
        gap: '12px',
        color: colors.subtle,
        fontSize: '0.9rem',
      }}>
        <span style={{ fontSize: '2rem', opacity: 0.4 }}>📄</span>
        <span>PDF link coming soon</span>
      </div>
    </main>
  );
}

export default CV;
