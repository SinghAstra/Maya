import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";
import { UnderlineButton } from "@/components/underline-button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="section section-first bg-cream">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="2/11/4/19" mobile="2/1/5/9">
            <p className="eyebrow">
              <strong>
                <em>ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA</em>
              </strong>
            </p>
          </Block>
          <Block desktop="7/11/15/23" mobile="5/1/12/9" className="max-md:mt-14">
            <h1>
              Rebuild your foundation on solid ground and finally begin to{" "}
              <strong>
                <em>thrive</em>
              </strong>
              .
            </h1>
            <p className="mt-block">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </Block>
          <Block desktop="15/11/17/23" mobile="12/1/14/9" className="max-md:mt-14 max-md:mb-16">
            <UnderlineButton href={siteConfig.url}>Book an Appointment</UnderlineButton>
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
