import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";
import { UnderlineButton } from "@/components/underline-button";

export function Hero() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="2/11/4/19" mobile="2/1/5/9">
            <p className="eyebrow">
              <strong>
                <em>IN-PERSON &amp; TELEHEALTH THERAPY IN SANTA MONICA, CA</em>
              </strong>
            </p>
          </Block>
          <Block desktop="7/11/15/23" mobile="5/1/12/9" className="max-md:mt-14">
            <h1>
              Therapy to help you move through anxiety, trauma, and{" "}
              <strong>
                <em>burnout</em>
              </strong>
              .
            </h1>
            <p className="mt-block">
              Warm, evidence-based care for adults in Santa Monica and across California who feel overwhelmed, stuck,
              or ready for something to change.
            </p>
          </Block>
          <Block desktop="15/11/17/23" mobile="12/1/14/9" className="max-md:mt-14 max-md:mb-16">
            <UnderlineButton href="#contact">Book an Appointment</UnderlineButton>
          </Block>
          <Block desktop="2/1/17/9" className="img-block" mobile="15/1/24/7">
            <CoverImage src="/images/hero-1.jpg" alt="Counselor speaking with a client" />
          </Block>
          <Block desktop="7/24/17/25" className="img-block" mobile="18/8/24/9">
            <CoverImage src="/images/hero-2.jpg" alt="" />
          </Block>
        </div>
      </div>
    </section>
  );
}
