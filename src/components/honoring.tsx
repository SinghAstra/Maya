import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";

export function Honoring() {
  return (
    <section className="section sec-medium bg-white">
      <div className="container-page">
        <div className="fe-grid">
          <Block d="1/1/15/14" className="img-block" m="1/1/10/9">
            <CoverImage src="/images/honoring.jpg" alt="Client looking hopefully out a window" />
          </Block>
          <Block d="9/15/15/25" m="10/1/14/9">
            <h2>
              Honoring where you&rsquo;ve been{" "}
              <strong>
                <em>&amp;</em>
              </strong>{" "}
              helping shape where you&rsquo;re headed.
            </h2>
          </Block>
        </div>
      </div>
    </section>
  );
}
