import { ORIGINAL_SITE_URL } from "@/config/site";
import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";
import { UnderlineButton } from "@/components/underline-button";

export function HowWeWork() {
  return (
    <section className="section bg-peach">
      <div className="container-page">
        <div className="fe-grid">
          <Block d="4/2/6/14" m="3/1/5/9">
            <p className="eyebrow">
              <strong>
                <em>HOW WE WORK</em>
              </strong>
            </p>
          </Block>
          <Block d="8/2/10/19" m="5/1/8/8">
            <h2>We&rsquo;re here to make a difference.</h2>
          </Block>
          <Block d="4/20/22/25" className="img-block" m="9/1/17/9">
            <CoverImage src="/images/how-we-work.jpg" alt="Warm therapy office" />
          </Block>
          <Block d="11/2/20/10" m="18/1/28/9" className="block-text">
            <p>
              The clients we work with are balancing so many things at once, it&rsquo;s often hard for them to put
              themselves first.
            </p>
            <p>
              Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order
              to truly understand their story and their struggles. We recognize that no two people are the same and
              that personalized therapy means an intentional, tailored approach. (You won&rsquo;t find anything
              &ldquo;one-size-fits-all&rdquo; here.) If you&rsquo;re ready to do the work, we&rsquo;re ready to help.
            </p>
          </Block>
          <Block d="11/10/20/18" m="28/1/38/9" className="block-text">
            <p>
              Sometimes we may gently challenge you to look at things differently and other times we may explore your
              emotions, all while encouraging you to practice what you&rsquo;ve learned in your daily life. We take what
              we do seriously because we know how important it is for you to heal from what&rsquo;s hurting you,
              discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this
              journey, offering support and guidance as you uncover your strengths and embrace what the future can hold
              for you.
            </p>
          </Block>
          <Block d="21/2/23/18" m="38/1/40/9">
            <UnderlineButton href={`${ORIGINAL_SITE_URL}/therapists-newbury-park`}>
              Learn more about us
            </UnderlineButton>
          </Block>
        </div>
      </div>
    </section>
  );
}
