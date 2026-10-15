import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";

export function About() {
  return (
    <section id="about" className="section bg-cream">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="1/1/18/9" mobile="1/1/13/9" className="img-block">
            <CoverImage
              src="/images/maya.png"
              alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
            />
          </Block>
          <Block desktop="3/11/5/23" mobile="14/1/16/9">
            <p className="eyebrow">
              <strong>
                <em>ABOUT</em>
              </strong>
            </p>
          </Block>
          <Block desktop="5/11/8/23" mobile="16/1/19/9">
            <h2>
              Meet Dr.{" "}
              <strong>
                <em>Maya</em>
              </strong>{" "}
              Reynolds.
            </h2>
          </Block>
          <Block desktop="9/11/18/23" mobile="20/1/32/9" className="block-text">
            <p>
              I&rsquo;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults
              who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people
              I work with are high-achieving, thoughtful, and self-aware &mdash; but internally feel exhausted, stuck in
              overthinking, or emotionally on edge.
            </p>
            <p>
              Trauma work is an important part of my practice. I work with adults who have experienced single-incident
              trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or
              chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping
              clients feel more regulated in their daily lives.
            </p>
            <p>
              I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients
              located in California. I believe therapy works best when clients feel respected, understood, and actively
              involved in the process &mdash; my goal is not just symptom relief, but helping you develop insight,
              resilience, and a stronger relationship with yourself over time.
            </p>
          </Block>
        </div>
      </div>
    </section>
  );
}
