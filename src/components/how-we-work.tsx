import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";
import { UnderlineButton } from "@/components/underline-button";

export function HowWeWork() {
  return (
    <section id="approach" className="section bg-surface-tint">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="4/2/6/14" mobile="3/1/5/9">
            <p className="eyebrow">
              <strong>
                <em>MY APPROACH</em>
              </strong>
            </p>
          </Block>
          <Block desktop="8/2/10/19" mobile="5/1/8/8">
            <h2>Structured support, with room to go deep.</h2>
          </Block>
          <Block desktop="4/20/22/25" className="img-block" mobile="9/1/17/9">
            <CoverImage src="/images/how-we-work.jpg" alt="Journaling beside a cup of coffee in warm light" />
          </Block>
          <Block desktop="11/2/20/10" mobile="18/1/28/9" className="block-text">
            <p>
              The people I work with are balancing so much at once that putting themselves first can feel almost
              impossible.
            </p>
            <p>
              Here, your needs come first. I take time to deeply listen so I can understand your story rather than a
              checklist of symptoms. No two people are the same, and therapy with me is never one-size-fits-all &mdash;
              sessions are structured enough to feel supportive while leaving space for reflection and depth.
            </p>
          </Block>
          <Block desktop="11/10/20/18" mobile="28/1/38/9" className="block-text">
            <p>
              Sometimes I&rsquo;ll gently challenge you to see things differently; other times we&rsquo;ll slow down and
              explore what you&rsquo;re feeling &mdash; always encouraging you to practice what you learn in daily life.
            </p>
            <p>
              I integrate evidence-based methods such as cognitive-behavioral therapy, EMDR, mindfulness-based
              practices, and body-oriented techniques, addressing both the emotional and physiological sides of what
              you&rsquo;re experiencing.
            </p>
          </Block>
          <Block desktop="21/2/23/18" mobile="38/1/40/9">
            <UnderlineButton href="#about">Meet Dr. Reynolds</UnderlineButton>
          </Block>
        </div>
      </div>
    </section>
  );
}
