import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";

export function WhoWeHelp() {
  return (
    <section id="services" className="section sec-medium bg-white">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="1/1/3/9" mobile="1/1/3/9">
            <h2>
              How I{" "}
              <strong>
                <em>help</em>
              </strong>
            </h2>
          </Block>
          <Block desktop="4/4/15/11" className="img-block" mobile="4/1/13/9">
            <CoverImage src="/images/adults.jpg" alt="A quiet, contemplative moment by the sea" />
          </Block>
          <Block desktop="16/4/21/11" mobile="14/1/20/9" className="block-text">
            <h4>Anxiety &amp; Panic Relief</h4>
            <p>
              For adults who look fine but feel constantly on edge. We&rsquo;ll quiet the racing mind, ease the physical
              tension, and replace chronic worry with a steadier, more grounded sense of calm using CBT and
              mindfulness-based tools.
            </p>
          </Block>
          <Block desktop="4/11/15/18" className="img-block" mobile="21/1/30/9">
            <CoverImage src="/images/couples.jpg" alt="Hands held in a gentle, caring gesture" />
          </Block>
          <Block desktop="16/11/22/18" mobile="31/1/37/9" className="block-text">
            <h4>
              <a href="#services">Trauma Recovery</a>
            </h4>
            <p>
              Whether from a single event or long-standing patterns, trauma can keep you feeling unsafe and stuck.
              Through EMDR and body-oriented work, we process what happened at a pace that prioritizes safety,
              stabilization, and real relief.
            </p>
          </Block>
          <Block desktop="4/18/15/25" className="img-block" mobile="38/1/47/9">
            <CoverImage src="/images/children.jpg" alt="A professional taking a thoughtful pause at work" />
          </Block>
          <Block desktop="16/18/22/25" mobile="48/1/54/9" className="block-text">
            <h4>
              <a href="#services">Burnout &amp; High Achievers</a>
            </h4>
            <p>
              For entrepreneurs, creatives, and professionals running on empty. We&rsquo;ll slow the relentless drive,
              reconnect you with what matters, and build sustainable ways of living and working &mdash; without the guilt
              of stepping back.
            </p>
          </Block>
        </div>
      </div>
    </section>
  );
}
