import React from 'react';

const Home: React.FC = () => {
    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif', minHeight: '100vh', background: '#f5f6fa' }}>
            <section style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem' }}
                />
                <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>Hi, I'm Kosi Ekwuno</h1>
                <h2 style={{ color: '#636e72', fontWeight: 400, margin: '0.5rem 0 2rem' }}>
                    Software Engineer & Web Developer
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#2d3436', marginBottom: '2rem' }}>
                    I build modern, responsive web applications with a focus on great user experiences. Welcome to my portfolio!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="#projects" style={buttonStyle}>View Projects</a>
                    <a href="#contact" style={buttonStyle}>Contact Me</a>
                </div>
            </section>
        </main>
    );
};

const buttonStyle: React.CSSProperties = {
    padding: '0.75rem 2rem',
    background: '#0984e3',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'background 0.2s',
    boxShadow: '0 2px 8px rgba(9,132,227,0.08)',
};

export default Home;