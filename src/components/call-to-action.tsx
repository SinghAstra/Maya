import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";
import { UnderlineButton } from "@/components/underline-button";
import { siteConfig } from "@/config/site";

export function CallToAction() {
  return (
    <section className="section sec-medium bg-cream">
      <div className="container-page">
        <div className="fe-grid">
          <Block d="4/1/16/3" className="img-block" m="1/1/7/5">
            <CoverImage src="/images/cta-1.jpg" alt="" />
          </Block>
          <Block d="1/5/3/15" m="8/1/10/9">
            <p className="eyebrow">
              <strong>
                <em>SCHEDULE AN APPOINTMENT</em>
              </strong>
            </p>
          </Block>
          <Block d="4/5/8/15" m="10/1/13/9">
            <h2>
              Find a therapist who is the right fit for{" "}
              <strong>
                <em>you</em>
              </strong>
              .
            </h2>
          </Block>
          <Block d="8/5/14/15" m="13/1/21/9" className="block-text">
            <p>
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the
              difference. We understand that your journey is personal, and we&rsquo;re here to support you with care and
              understanding every step of the way. Each member of our team brings dedicated expertise and a commitment
              to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>
            <p>Click the button below to schedule an appointment.</p>
          </Block>
          <Block d="14/5/16/15" m="21/1/23/9">
            <UnderlineButton href={siteConfig.url}>Book now</UnderlineButton>
          </Block>
          <Block d="1/17/16/25" className="img-block" m="24/2/32/9">
            <CoverImage src="/images/cta-2.jpg" alt="Welcoming therapy office" />
          </Block>
        </div>
      </div>
    </section>
  );
}
