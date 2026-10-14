import Image from "next/image";
import { ORIGINAL_SITE_URL } from "@/config/site";
import { Block } from "@/components/block";
import { TEAM } from "@/data/team";

export function Footer() {
  return (
    <footer className="section bg-white" style={{ minHeight: "45vh" }}>
      <div className="container-page">
        <div className="fe-grid">
          <Block d="1/1/5/8" m="2/1/5/9">
            <Image src="/images/logo.png" alt="Conejo Valley Counseling" width={220} height={82}
              style={{ height: "auto", width: "100%", maxWidth: 220 }} />
          </Block>
          <Block d="4/1/9/9" m="5/1/10/9" className="block-text">
            <p>
              We want to make getting started simple. You&rsquo;re welcome to come into our office in Newbury Park or
              schedule virtual appointments from anywhere in CA&mdash;whatever works best for you.
            </p>
          </Block>
          <Block d="1/11/6/15" m="10/2/15/8" className="block-text">
            <p><strong>Navigate</strong></p>
            <div className="footer-list">
              <a href="/">Home</a>
              <a href={`${ORIGINAL_SITE_URL}/therapists-newbury-park`}>About</a>
              <a href={`${ORIGINAL_SITE_URL}/faqs`}>FAQs</a>
              <a href={`${ORIGINAL_SITE_URL}/contact`}>Contact</a>
            </div>
          </Block>
          <Block d="1/15/8/20" m="23/2/30/8" className="block-text">
            <p><strong>Our Team</strong></p>
            <div className="footer-list">
              {TEAM.map((name) => (
                <a key={name} href="#">
                  {name}
                </a>
              ))}
            </div>
          </Block>
          <Block d="1/20/10/25" m="15/2/23/8" className="block-text">
            <p><strong>Contact</strong></p>
            <p>
              925 Broadbeck Dr
              <br />
              Suites 200 and 225
              <br />
              Newbury Park, CA 91320
              <br />
              <a href="mailto:info@conejovalleycounseling.com">info@conejovalleycounseling.com</a>
              <br />
              <a href="tel:8052423120">805.242.3120</a>
            </p>
            <p>Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley</p>
          </Block>
        </div>
      </div>
    </footer>
  );
}
