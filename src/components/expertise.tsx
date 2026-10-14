import { Fragment } from "react";
import { Block } from "@/components/block";
import { EXPERTISE_COLUMN_ONE, EXPERTISE_COLUMN_TWO, type ExpertiseItem } from "@/data/expertise";

function ExpertiseColumn({ items }: { items: ExpertiseItem[] }) {
  return (
    <>
      {items.map((item) => (
        <Fragment key={item.label}>
          {item.desktop.rule && (
            <Block d={item.desktop.rule} m={item.mobile.rule!}>
              <div className="rule-block" />
            </Block>
          )}
          <Block d={item.desktop.text} m={item.mobile.text} className="block-text">
            <p>{item.label}</p>
          </Block>
        </Fragment>
      ))}
    </>
  );
}

export function Expertise() {
  return (
    <section className="section bg-white" style={{ minHeight: "80vh" }}>
      <div className="container-page">
        <div className="fe-grid">
          <Block d="1/2/4/8" m="1/1/3/9">
            <h3>
              Our areas of{" "}
              <strong>
                <em>expertise</em>
              </strong>
            </h3>
          </Block>
          <ExpertiseColumn items={EXPERTISE_COLUMN_ONE} />
          <ExpertiseColumn items={EXPERTISE_COLUMN_TWO} />
        </div>
      </div>
    </section>
  );
}
