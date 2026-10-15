import { Fragment } from "react";
import { Block } from "@/components/block";
import { EXPERTISE_COLUMN_ONE, EXPERTISE_COLUMN_TWO, type ExpertiseItem } from "@/data/expertise";

function ExpertiseColumn({ items }: { items: ExpertiseItem[] }) {
  return (
    <>
      {items.map((item) => (
        <Fragment key={item.label}>
          <Block desktop={item.desktop.text} mobile={item.mobile.text} className="block-text">
            <p>{item.label}</p>
          </Block>
        </Fragment>
      ))}
    </>
  );
}

export function Expertise() {
  return (
    <section className="section bg-white min-h-showcase">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="1/2/4/8" mobile="1/1/3/9">
            <h3>
              Areas I{" "}
              <strong>
                <em>specialize</em>
              </strong>{" "}
              in
            </h3>
          </Block>
          <ExpertiseColumn items={EXPERTISE_COLUMN_ONE} />
          <ExpertiseColumn items={EXPERTISE_COLUMN_TWO} />
        </div>
      </div>
    </section>
  );
}
