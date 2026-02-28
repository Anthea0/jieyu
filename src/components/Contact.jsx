import React from 'react';

function Contact() {
    return (
        <main>
            <h2 className="section-title">contact me</h2>
            
            <div style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
                {/* 左侧：联系信息 */}
                <div style={{ flex: 1 }}>
                    <p>I'm interested in freelance opportunities and academic collaborations. However, if you have other requests or questions, don't hesitate to use the form.</p>
                    <div style={{ marginTop: '20px' }}>
                        <p><i className="fas fa-map-marker-alt"></i> No.1 Duxue Road, Guangzhou, China</p>
                        <p><i className="fas fa-envelope"></i> jyu361@connect.hkust-gz.edu.cn</p>
                    </div>
                </div>

                {/* 右侧：表单 */}
                <div style={{ flex: 1 }}>
                    <form action="#" method="post">
                        <div className="form-group">
                            {/* 注意这里变成了 htmlFor */}
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="user_name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="user_email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="user_message" rows="5" required></textarea>
                        </div>

                        <button type="submit" className="btn" style={{ width: '100%', background: '#333', color: 'white' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Contact;