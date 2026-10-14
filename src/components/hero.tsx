import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";
import { UnderlineButton } from "@/components/underline-button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="section section-first bg-cream">
      <div className="container-page">
        <div className="fe-grid">
          <Block d="2/11/4/19" m="2/1/5/9">
            <p className="eyebrow">
              <strong>
                <em>ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA</em>
              </strong>
            </p>
          </Block>
          <Block d="7/11/15/23" m="5/1/12/9">
            <h1>
              Rebuild your foundation on solid ground and finally begin to{" "}
              <strong>
                <em>thrive</em>
              </strong>
              .
            </h1>
            <p className="mt-6.75">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </Block>
          <Block d="15/11/17/23" m="12/1/14/9">
            <UnderlineButton href={siteConfig.url}>Book an Appointment</UnderlineButton>
          </Block>
          <Block d="2/1/17/9" className="img-block" m="15/1/24/7">
            <CoverImage src="/images/hero-1.jpg" alt="Counselor speaking with a client" />
          </Block>
          <Block d="7/24/17/25" className="img-block" m="18/8/24/9">
            <CoverImage src="/images/hero-2.jpg" alt="" />
          </Block>
        </div>
      </div>
    </section>
  );
}
