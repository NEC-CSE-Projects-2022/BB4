import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="main-title">MEET OUR TEAM</h1>

      {/* Guide Section */}
      <section className="guide-section team-group">
        <h2><span className="section-subtitle"></span> Our Guide</h2>
        <div className="team-container">
          {/* Guide Card */}
          <div className="team-member-card guide-card">
            <div className="image-wrapper">
              <img src="/images/guide.jpg" alt="Dr. Siva Rao" />
            </div>
            <h3 className="member-name">Dr. S. N. Tirumala Rao</h3>
            <p className="member-role">Project Guide</p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="members-section team-group">
        <h2><span className="section-subtitle"></span> Our Team</h2>
        <div className="team-container team-members">
          
          {/* Member 1 Card */}
          <div className="team-member-card">
            <div className="image-wrapper">
              <img src="/images/ashok.jpg" alt="Ashok Nimmala" />
            </div>
            <h3 className="member-name">Ashok Nimmala</h3>
            <p className="member-role">Team Lead</p>
          </div>
          
          {/* Member 2 Card */}
          <div className="team-member-card">
            <div className="image-wrapper">
              <img src="/images/sudheer.jpg" alt="Sudheer Reddy" />
            </div>
            <h3 className="member-name">Sudheer Reddy</h3>
            <p className="member-role">Developer</p>
          </div>
          
          {/* Member 3 Card */}
          <div className="team-member-card">
            <div className="image-wrapper">
              <img src="/images/don.jpg" alt="Venkata Krishna" />
            </div>
            <h3 className="member-name">Venkata Krishna</h3>
            <p className="member-role">Developer</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}