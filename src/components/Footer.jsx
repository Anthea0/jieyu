import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="social-links">
                <a href="#contact"><i className="fas fa-envelope"></i></a>
                <a href="#github"><i className="fab fa-github"></i></a>
                <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
                <a href="#twitter"><i className="fab fa-twitter"></i></a>
            </div>
            <p>&copy; 2026 Jie Yu. Powered by React JS.</p>
        </footer>
    );
}

export default Footer;