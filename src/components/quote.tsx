import { Block } from "@/components/block";

export function Quote() {
  return (
    <section className="section sec-medium bg-quote-surface">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="5/2/11/18" mobile="1/1/3/9">
            <h2 className="text-quote">
              You don&rsquo;t have to hold it all together to be worthy of support.{" "}
              <em>Nothing you bring here will be too heavy to carry together.</em>
            </h2>
          </Block>
        </div>
      </div>
    </section>
  );
}
