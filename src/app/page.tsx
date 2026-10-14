import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/Header";

/* ------------------------------------------------------------------
   Fluid-engine block: grid-area vars pre-mapped from the original
   site (desktop >=768px / mobile <768px). See block-layout-map.txt.
------------------------------------------------------------------ */
function B({
  d,
  m,
  className = "",
  style,
  children,
}: {
  d: string;
  m: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      className={`fe-block ${className}`}
      style={{ ["--ad" as string]: d, ["--am" as string]: m, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* Cover image filling its grid block */
function Cover({ src, alt }: { src: string; alt: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className="cover-img" />;
}

function Btn({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="btn-primary">
      {children}
    </a>
  );
}

const TEAM = [
  "Jennifer Anderson",
  "Heather Williams-Baumgart",
  "Autumn Bodily",
  "Candace Bletscher",
  "Samantha Johnson",
  "Rosa Gomez",
  "Chad Flores",
  "Simran Sidhu",
  "Jessica Jauregui",
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="page" className="flex-1">
        {/* ================= 1. HERO — light/cream, custom(0) ================= */}
        <section className="section section-first bg-cream">
          <div className="container-page">
            <div className="fe-grid">
              <B d="2/11/4/19" m="2/1/5/9">
                <p className="eyebrow">
                  <strong>
                    <em>ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA</em>
                  </strong>
                </p>
              </B>
              <B d="7/11/15/23" m="5/1/12/9">
                <h1>
                  Rebuild your foundation on solid ground and finally begin to{" "}
                  <strong>
                    <em>thrive</em>
                  </strong>
                  .
                </h1>
                <p style={{ marginTop: 27 }}>
                  Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
                </p>
              </B>
              <B d="15/11/17/23" m="12/1/14/9">
                <Btn href="https://www.conejovalleycounseling.com/contact">Book an Appointment</Btn>
              </B>
              <B d="2/1/17/9" className="img-block" m="15/1/24/7">
                <Cover src="/images/hero-1.jpg" alt="Counselor speaking with a client" />
              </B>
              <B d="7/24/17/25" className="img-block" m="18/8/24/9">
                <Cover src="/images/hero-2.jpg" alt="" />
              </B>
            </div>
          </div>
        </section>

        {/* ================= 2. INTRO — cream, custom(70) ================= */}
        <section className="section bg-cream" style={{ minHeight: "70vh" }}>
          <div className="container-page">
            <div className="fe-grid">
              <B d="4/2/8/15" m="1/1/5/9">
                <h2>You&rsquo;re holding onto hope that life can be better than it is right now.</h2>
              </B>
              <B d="9/2/16/9" m="5/1/13/9" className="block-text">
                <p>At Conejo Valley Family Counseling we want to make that hope a reality.</p>
                <p>
                  Whether you&rsquo;re an adult seeking personal growth, looking to work through your trauma, a couple
                  working on your relationship, or a parent looking for support for your child, we provide a
                  compassionate and safe space to help you navigate all of life&rsquo;s ups and downs.
                </p>
              </B>
              <B d="9/9/17/16" m="22/1/29/9" className="block-text">
                <p>
                  First and foremost, we believe what you&rsquo;re going through is real, valid, and worthy of support.
                  Our team offers clients in the Newbury Park area and across CA an environment to discover a new life
                  and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and
                  understanding, you can find your footing again and take a transformative path forward.
                </p>
              </B>
              <B d="1/18/17/25" className="img-block" m="14/1/21/9">
                <Cover src="/images/intro-beach.jpg" alt="Beach at sunset" />
              </B>
            </div>
          </div>
        </section>

        {/* ================= 3. WHO WE HELP — white, medium ================= */}
        <section className="section sec-medium bg-white">
          <div className="container-page">
            <div className="fe-grid">
              <B d="1/1/3/9" m="1/1/3/9">
                <h2>
                  Who we{" "}
                  <strong>
                    <em>help</em>
                  </strong>
                </h2>
              </B>
              <B d="4/4/15/11" className="img-block" m="4/1/13/9">
                <Cover src="/images/adults.jpg" alt="Adults in therapy" />
              </B>
              <B d="16/4/21/11" m="14/1/20/9" className="block-text">
                <h4>Adults</h4>
                <p>
                  Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with
                  confidence by addressing the root causes of anxiety, stress, and emotional pain.
                </p>
              </B>
              <B d="4/11/15/18" className="img-block" m="21/1/30/9">
                <Cover src="/images/couples.jpg" alt="Couple in therapy" />
              </B>
              <B d="16/11/22/18" m="31/1/37/9" className="block-text">
                <h4>
                  <a href="https://www.conejovalleycounseling.com/couples-therapy">Couples</a>
                </h4>
                <p>
                  Relationships require effort, and we&rsquo;re here to help you strengthen yours. We guide couples
                  through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and
                  strengthen your relationship.
                </p>
              </B>
              <B d="4/18/15/25" className="img-block" m="38/1/47/9">
                <Cover src="/images/children.jpg" alt="Children and teens in therapy" />
              </B>
              <B d="16/18/22/25" m="48/1/54/9" className="block-text">
                <h4>
                  <a href="https://www.conejovalleycounseling.com/children-and-teens">Children</a> &amp; Teens
                </h4>
                <p>
                  Kids need support, too. We help them process big emotions, cope with challenging family situations,
                  build coping skills, and feel understood, while also working closely with their parents to create a
                  nurturing environment.
                </p>
              </B>
            </div>
          </div>
        </section>

        {/* ================= 4. QUOTE — black + bg image, medium ================= */}
        <section className="section sec-medium bg-quote">
          <div className="container-page">
            <div className="fe-grid">
              <B d="5/2/11/18" m="1/1/3/9" className="quote-text">
                <h2 className="quote-text">
                  You deserve a place where your story is heard, valued, and understood.{" "}
                  <em>Nothing will be too heavy for us to carry together.</em>
                </h2>
              </B>
            </div>
          </div>
        </section>

        {/* ================= 5. EXPERTISE — white, custom(80) ================= */}
        <section className="section bg-white" style={{ minHeight: "80vh" }}>
          <div className="container-page">
            <div className="fe-grid">
              <B d="1/2/4/8" m="1/1/3/9">
                <h3>
                  Our areas of{" "}
                  <strong>
                    <em>expertise</em>
                  </strong>
                </h3>
              </B>

              {/* column 1 */}
              <B d="1/9/3/17" m="4/1/6/9" className="block-text"><p>Dissociation</p></B>
              <B d="2/9/3/16" m="5/1/6/9"><div className="rule-block" /></B>
              <B d="3/9/5/17" m="6/1/8/9" className="block-text"><p>Trauma</p></B>
              <B d="4/9/5/16" m="7/1/8/9"><div className="rule-block" /></B>
              <B d="5/9/7/17" m="8/1/10/9" className="block-text"><p>Family conflict</p></B>
              <B d="6/9/7/16" m="9/1/10/9"><div className="rule-block" /></B>
              <B d="7/9/9/17" m="10/1/12/9" className="block-text"><p>Special needs parenting</p></B>
              <B d="8/9/9/16" m="11/1/12/9"><div className="rule-block" /></B>
              <B d="9/9/11/17" m="12/1/14/9" className="block-text"><p>Depression</p></B>
              <B d="10/9/11/16" m="13/1/14/9"><div className="rule-block" /></B>
              <B d="11/9/13/17" m="14/1/16/9" className="block-text"><p>marriage</p></B>

              {/* column 2 */}
              <B d="2/17/3/24" m="15/1/16/9"><div className="rule-block" /></B>
              <B d="1/17/3/25" m="16/1/18/9" className="block-text"><p>anxiety</p></B>
              <B d="4/17/5/24" m="17/1/18/9"><div className="rule-block" /></B>
              <B d="3/17/5/25" m="18/1/20/9" className="block-text"><p>relationships</p></B>
              <B d="6/17/7/24" m="19/1/20/9"><div className="rule-block" /></B>
              <B d="5/17/7/25" m="20/1/22/9" className="block-text"><p>children</p></B>
              <B d="8/17/9/24" m="21/1/22/9"><div className="rule-block" /></B>
              <B d="7/17/9/25" m="22/1/24/9" className="block-text"><p>teens</p></B>
              <B d="10/17/11/24" m="23/1/24/9"><div className="rule-block" /></B>
              <B d="9/17/11/25" m="24/1/26/9" className="block-text"><p>intimacy &amp; connection</p></B>
              <B d="11/17/13/25" m="26/1/28/9" className="block-text"><p>&hellip;and more.</p></B>
            </div>
          </div>
        </section>

        {/* ================= 6. HOW WE WORK — peach, custom(0) ================= */}
        <section className="section bg-peach">
          <div className="container-page">
            <div className="fe-grid">
              <B d="4/2/6/14" m="3/1/5/9">
                <p className="eyebrow">
                  <strong>
                    <em>HOW WE WORK</em>
                  </strong>
                </p>
              </B>
              <B d="8/2/10/19" m="5/1/8/8">
                <h2>We&rsquo;re here to make a difference.</h2>
              </B>
              <B d="4/20/22/25" className="img-block" m="9/1/17/9">
                <Cover src="/images/how-we-work.jpg" alt="Warm therapy office" />
              </B>
              <B d="11/2/20/10" m="18/1/28/9" className="block-text">
                <p>
                  The clients we work with are balancing so many things at once, it&rsquo;s often hard for them to put
                  themselves first.
                </p>
                <p>
                  Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in
                  order to truly understand their story and their struggles. We recognize that no two people are the
                  same and that personalized therapy means an intentional, tailored approach. (You won&rsquo;t find
                  anything &ldquo;one-size-fits-all&rdquo; here.) If you&rsquo;re ready to do the work, we&rsquo;re
                  ready to help.
                </p>
              </B>
              <B d="11/10/20/18" m="28/1/38/9" className="block-text">
                <p>
                  Sometimes we may gently challenge you to look at things differently and other times we may explore
                  your emotions, all while encouraging you to practice what you&rsquo;ve learned in your daily life. We
                  take what we do seriously because we know how important it is for you to heal from what&rsquo;s
                  hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk
                  alongside you in this journey, offering support and guidance as you uncover your strengths and embrace
                  what the future can hold for you.
                </p>
              </B>
              <B d="21/2/23/18" m="38/1/40/9">
                <Btn href="https://www.conejovalleycounseling.com/therapists-newbury-park">Learn more about us</Btn>
              </B>
            </div>
          </div>
        </section>

        {/* ================= 7. HONORING — white, medium ================= */}
        <section className="section sec-medium bg-white">
          <div className="container-page">
            <div className="fe-grid">
              <B d="1/1/15/14" className="img-block" m="1/1/10/9">
                <Cover src="/images/honoring.jpg" alt="Client looking hopefully out a window" />
              </B>
              <B d="9/15/15/25" m="10/1/14/9">
                <h2>
                  Honoring where you&rsquo;ve been{" "}
                  <strong>
                    <em>&amp;</em>
                  </strong>{" "}
                  helping shape where you&rsquo;re headed.
                </h2>
              </B>
            </div>
          </div>
        </section>

        {/* ================= 8. SPECIALTIES — white, custom(0) ================= */}
        <section className="section bg-white">
          <div className="container-page">
            <div className="fe-grid">
              <B d="3/2/7/9" m="3/1/5/9">
                <h3>
                  Our{" "}
                  <strong>
                    <em>specialties</em>
                  </strong>{" "}
                  include&hellip;
                </h3>
              </B>

              <B d="4/10/11/17" m="6/1/13/9" className="block-text">
                <h4>Trauma</h4>
                <p>
                  We don&rsquo;t always know when and how we&rsquo;ve experienced trauma. In therapy, we&rsquo;ll work
                  together to help you process your past, understand what&rsquo;s causing you to stay &ldquo;stuck,
                  &rdquo; and regain a sense of safety, control, and hope. You don&rsquo;t have to carry your burdens
                  alone.
                </p>
              </B>
              <B d="11/10/13/17" m="13/1/15/9">
                <Btn href="https://www.conejovalleycounseling.com/trauma-counseling-newbury-park">Learn more</Btn>
              </B>

              <B d="15/10/22/17" m="16/1/23/9" className="block-text">
                <h4>Dissociation</h4>
                <p>
                  The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be
                  overwhelming. In therapy, we&rsquo;ll help you understand these experiences, recognize your own
                  triggers, and create a sense of balance and identity so that you can feel more grounded.
                </p>
              </B>
              <B d="22/10/24/17" m="23/1/25/9">
                <Btn href="https://www.conejovalleycounseling.com/dissociative-identity-disorder-therapist-newbury-park">
                  Learn more
                </Btn>
              </B>

              <B d="4/18/11/25" m="26/1/33/9" className="block-text">
                <h4>EMDR</h4>
                <p>
                  Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps
                  process and heal trauma by reworking how painful memories are stored in your brain. This allows you to
                  find relief and move toward lasting healing.
                </p>
              </B>
              <B d="11/18/13/25" m="33/1/35/9">
                <Btn href="https://www.conejovalleycounseling.com/emdr-therapy-newbury-park">Learn more</Btn>
              </B>

              <B d="15/18/22/25" m="36/1/42/9" className="block-text">
                <h4>Special Needs Parenting</h4>
                <p>
                  Parenting a child with special needs presents unique challenges and complex emotions. We provide
                  compassionate support through lived experience and expertise to help you navigate this journey with
                  tools, understanding, and self-care.
                </p>
              </B>
              <B d="22/18/24/25" m="42/1/44/9">
                <Btn href="https://www.conejovalleycounseling.com/counseling-special-needs-parents-newbury-park">
                  Learn more
                </Btn>
              </B>
            </div>
          </div>
        </section>

        {/* ================= 9. CTA — cream, medium ================= */}
        <section className="section sec-medium bg-cream">
          <div className="container-page">
            <div className="fe-grid">
              <B d="4/1/16/3" className="img-block" m="1/1/7/5">
                <Cover src="/images/cta-1.jpg" alt="" />
              </B>
              <B d="1/5/3/15" m="8/1/10/9">
                <p className="eyebrow">
                  <strong>
                    <em>SCHEDULE AN APPOINTMENT</em>
                  </strong>
                </p>
              </B>
              <B d="4/5/8/15" m="10/1/13/9">
                <h2>
                  Find a therapist who is the right fit for{" "}
                  <strong>
                    <em>you</em>
                  </strong>
                  .
                </h2>
              </B>
              <B d="8/5/14/15" m="13/1/21/9" className="block-text">
                <p>
                  Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all
                  the difference. We understand that your journey is personal, and we&rsquo;re here to support you with
                  care and understanding every step of the way. Each member of our team brings dedicated expertise and a
                  commitment to support you in your struggles. We want you to feel prioritized, understood, and
                  empowered.
                </p>
                <p>Click the button below to schedule an appointment.</p>
              </B>
              <B d="14/5/16/15" m="21/1/23/9">
                <Btn href="https://www.conejovalleycounseling.com/contact">Book now</Btn>
              </B>
              <B d="1/17/16/25" className="img-block" m="24/2/32/9">
                <Cover src="/images/cta-2.jpg" alt="Welcoming therapy office" />
              </B>
            </div>
          </div>
        </section>

        {/* ================= 10. FOOTER — white, custom(45) ================= */}
        <footer className="section bg-white" style={{ minHeight: "45vh" }}>
          <div className="container-page">
            <div className="fe-grid">
              <B d="1/1/5/8" m="2/1/5/9">
                <Image src="/images/logo.png" alt="Conejo Valley Counseling" width={220} height={82}
                  style={{ height: "auto", width: "100%", maxWidth: 220 }} />
              </B>
              <B d="4/1/9/9" m="5/1/10/9" className="block-text">
                <p>
                  We want to make getting started simple. You&rsquo;re welcome to come into our office in Newbury Park
                  or schedule virtual appointments from anywhere in CA&mdash;whatever works best for you.
                </p>
              </B>
              <B d="1/11/6/15" m="10/2/15/8" className="block-text">
                <p><strong>Navigate</strong></p>
                <div className="footer-list">
                  <a href="/">Home</a>
                  <a href="https://www.conejovalleycounseling.com/therapists-newbury-park">About</a>
                  <a href="https://www.conejovalleycounseling.com/faqs">FAQs</a>
                  <a href="https://www.conejovalleycounseling.com/contact">Contact</a>
                </div>
              </B>
              <B d="1/15/8/20" m="23/2/30/8" className="block-text">
                <p><strong>Our Team</strong></p>
                <div className="footer-list">
                  {TEAM.map((name) => (
                    <a key={name} href="#">
                      {name}
                    </a>
                  ))}
                </div>
              </B>
              <B d="1/20/10/25" m="15/2/23/8" className="block-text">
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
              </B>
            </div>
          </div>
        </footer>

        {/* ================= 11. LEGAL — teal, custom(5) ================= */}
        <section className="section bg-teal" style={{ minHeight: "5vh" }}>
          <div className="container-page">
            <div className="fe-grid">
              <B d="1/1/2/25" m="1/1/3/9" className="block-text">
                <p>
                  <a href="#">Terms</a> | <a href="#">Privacy Policy</a> | <a href="#">Disclaimer</a> | Website by
                  Walker Strategy Co.
                </p>
              </B>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
