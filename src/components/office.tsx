import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";

export function Office() {
  return (
    <section id="office" className="section bg-surface-tint">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="1/1/12/13" mobile="1/1/10/9" className="img-block">
            <CoverImage src="/images/office-1.jpg" alt="Therapy office with natural light and comfortable seating" />
          </Block>
          <Block desktop="1/14/3/25" mobile="11/1/13/9">
            <p className="eyebrow">
              <strong>
                <em>OUR OFFICE</em>
              </strong>
            </p>
          </Block>
          <Block desktop="3/14/6/25" mobile="13/1/16/9">
            <h2>
              A calm space for{" "}
              <strong>
                <em>healing</em>
              </strong>
              .
            </h2>
          </Block>
          <Block desktop="6/14/10/25" mobile="16/1/24/9" className="block-text">
            <p>
              My Santa Monica office is a quiet, private space designed to feel calm and grounding &mdash; filled with
              natural light, comfortable seating, and an uncluttered environment. Clients often share that the space
              itself helps them feel more at ease the moment they arrive.
            </p>
            <p>
              Whether you&rsquo;re joining in person or by secure telehealth, everything we do is built around your
              safety, comfort, and privacy.
            </p>
          </Block>
          <Block desktop="10/14/12/25" mobile="24/1/28/9" className="block-text">
            <p>
              123th Street 45 W, Santa Monica, CA 90401
              <br />
              In-person sessions &amp; secure telehealth across California
            </p>
          </Block>
          <Block desktop="12/14/18/25" mobile="28/1/37/9" className="img-block">
            <CoverImage src="/images/office-2.jpg" alt="Counseling room with bookshelves and soft seating" />
          </Block>
        </div>
      </div>
    </section>
  );
}
