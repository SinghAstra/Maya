import { Block } from "@/components/block";

export function Quote() {
  return (
    <section className="section sec-medium bg-quote">
      <div className="container-page">
        <div className="fe-grid">
          <Block d="5/2/11/18" m="1/1/3/9">
            <h2 className="quote-text">
              You deserve a place where your story is heard, valued, and understood.{" "}
              <em>Nothing will be too heavy for us to carry together.</em>
            </h2>
          </Block>
        </div>
      </div>
    </section>
  );
}
