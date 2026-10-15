import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";
import { UnderlineButton } from "@/components/underline-button";

export function CallToAction() {
  return (
    <section className="section sec-medium bg-cream">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="4/1/16/3" className="img-block" mobile="1/1/7/5">
            <CoverImage src="/images/cta-1.jpg" alt="" />
          </Block>
          <Block desktop="1/5/3/15" mobile="8/1/10/9">
            <p className="eyebrow">
              <strong>
                <em>BOOK A FREE 15-MIN CONSULT</em>
              </strong>
            </p>
          </Block>
          <Block desktop="4/5/8/15" mobile="10/1/13/9">
            <h2>
              Find a therapist who gets{" "}
              <strong>
                <em>you</em>
              </strong>
              .
            </h2>
          </Block>
          <Block desktop="8/5/14/15" mobile="13/1/21/9" className="block-text">
            <p>
              Reaching out is often the hardest step. Whether you&rsquo;ve been in therapy before or this is your first
              time, I&rsquo;ll meet you where you are &mdash; with warmth, honesty, and a real understanding of what it
              means to live and work in a fast-paced environment.
            </p>
            <p>In-person sessions in Santa Monica, or secure telehealth anywhere in California.</p>
          </Block>
          <Block desktop="14/5/16/15" mobile="21/1/23/9">
            <UnderlineButton href="#contact">Book now</UnderlineButton>
          </Block>
          <Block desktop="1/17/16/25" className="img-block" mobile="24/2/32/9">
            <CoverImage src="/images/cta-2.jpg" alt="A calm, light-filled corner with soft seating" />
          </Block>
        </div>
      </div>
    </section>
  );
}
