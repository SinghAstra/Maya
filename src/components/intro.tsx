import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";

export function Intro() {
  return (
    <section className="section bg-cream" style={{ minHeight: "70vh" }}>
      <div className="container-page">
        <div className="fe-grid">
          <Block d="4/2/8/15" m="1/1/5/9">
            <h2>You&rsquo;re holding onto hope that life can be better than it is right now.</h2>
          </Block>
          <Block d="9/2/16/9" m="5/1/13/9" className="block-text">
            <p>At Conejo Valley Family Counseling we want to make that hope a reality.</p>
            <p>
              Whether you&rsquo;re an adult seeking personal growth, looking to work through your trauma, a couple
              working on your relationship, or a parent looking for support for your child, we provide a compassionate
              and safe space to help you navigate all of life&rsquo;s ups and downs.
            </p>
          </Block>
          <Block d="9/9/17/16" m="22/1/29/9" className="block-text">
            <p>
              First and foremost, we believe what you&rsquo;re going through is real, valid, and worthy of support. Our
              team offers clients in the Newbury Park area and across CA an environment to discover a new life and a
              deeper sense of self in the midst of their struggles. As we tap into the power of connection and
              understanding, you can find your footing again and take a transformative path forward.
            </p>
          </Block>
          <Block d="1/18/17/25" className="img-block" m="14/1/21/9">
            <CoverImage src="/images/intro-beach.jpg" alt="Beach at sunset" />
          </Block>
        </div>
      </div>
    </section>
  );
}
