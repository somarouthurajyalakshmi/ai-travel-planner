'use client';

export default function HomePage() {
  return (
    <div style={{ 
      padding: '60px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>🌍 AI Travel Planner</h1>
      <p style={{ fontSize: '18px' }}>Your intelligent travel companion</p>
      
      <div style={{ marginTop: '30px' }}>
        <a href="/login" style={{ 
          margin: '10px', 
          padding: '12px 24px', 
          background: '#0070f3', 
          color: 'white', 
          textDecoration: 'none',
          borderRadius: '5px' 
        }}>
          Login
        </a>
        <a href="/dashboard" style={{ 
          margin: '10px', 
          padding: '12px 24px', 
          background: '#0070f3', 
          color: 'white', 
          textDecoration: 'none',
          borderRadius: '5px' 
        }}>
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}