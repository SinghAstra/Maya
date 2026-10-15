import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";

export function Intro() {
  return (
    <section className="section bg-cream min-h-airy">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="4/2/8/15" mobile="1/1/5/9">
            <h2>You&rsquo;re carrying a lot &mdash; and part of you hopes it can feel lighter.</h2>
          </Block>
          <Block desktop="9/2/16/9" mobile="5/1/13/9" className="block-text">
            <p>That hope is worth following. I&rsquo;m Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica.</p>
            <p>
              Many of the people I work with look functional on the outside while quietly battling constant worry,
              tension, poor sleep, or the lingering weight of earlier experiences. Together we make sense of what
              you&rsquo;re carrying and build a steadier way forward.
            </p>
          </Block>
          <Block desktop="9/9/17/16" mobile="22/1/29/9" className="block-text">
            <p>
              My approach is warm, collaborative, and grounded &mdash; structured enough to feel supportive, with room
              for reflection and depth. I integrate cognitive-behavioral therapy, EMDR, mindfulness, and body-oriented
              techniques so we address both the emotional and physical sides of what you&rsquo;re experiencing.
            </p>
            <p>
              My goal is more than symptom relief: it&rsquo;s helping you build insight, resilience, and a stronger
              relationship with yourself over time.
            </p>
          </Block>
          <Block desktop="1/18/17/25" className="img-block" mobile="14/1/21/9">
            <CoverImage src="/images/intro-beach.jpg" alt="Beach at sunset" />
          </Block>
        </div>
      </div>
    </section>
  );
}
