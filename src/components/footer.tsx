import { Block } from "@/components/block";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="section bg-white min-h-footer">
      <span id="contact" className="block scroll-mt-header" />
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="1/1/5/8" mobile="2/1/5/9">
            <p className="wordmark">Dr. Maya Reynolds</p>
            <p className="wordmark-sub">PsyD &middot; Clinical Psychology</p>
          </Block>
          <Block desktop="4/1/9/9" mobile="5/1/10/9" className="block-text">
            <p>
              Getting started is simple. Book a free 15-minute consult, meet me in my quiet Santa Monica office, or
              begin with a secure telehealth session from anywhere in California.
            </p>
          </Block>
          <Block desktop="1/11/6/15" mobile="10/2/15/8" className="block-text">
            <p><strong>Navigate</strong></p>
            <div className="footer-list">
              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#office">Our Office</a>
              <a href="#faqs">FAQs</a>
            </div>
          </Block>
          <Block desktop="1/15/8/20" mobile="23/2/30/8" className="block-text">
            <p><strong>Services</strong></p>
            <div className="footer-list">
              <a href="#services">Anxiety &amp; Panic</a>
              <a href="#services">Trauma &amp; PTSD</a>
              <a href="#services">Burnout &amp; Stress</a>
              <a href="#services">Perfectionism</a>
            </div>
          </Block>
          <Block desktop="1/20/10/25" mobile="15/2/23/8" className="block-text" >
            <p><strong>Contact</strong></p>
            <p>
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
              <br />
              <a href="mailto:hello@mareynoldspsych.com">hello@mareynoldspsych.com</a>
            </p>
            <p>Serving Santa Monica, Venice, Beverly Hills, &amp; across California via telehealth</p>
          </Block>
        </div>
      </div>
    </footer>
  );
}
