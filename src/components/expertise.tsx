import { Fragment } from "react";
import { Block } from "@/components/block";

type ExpertiseItem = {
  label: string;
  desktop: { text: string; rule?: string };
  mobile: { text: string; rule?: string };
};

const COLUMN_ONE: ExpertiseItem[] = [
  { label: "Dissociation", desktop: { text: "1/9/3/17", rule: "2/9/3/16" }, mobile: { text: "4/1/6/9", rule: "5/1/6/9" } },
  { label: "Trauma", desktop: { text: "3/9/5/17", rule: "4/9/5/16" }, mobile: { text: "6/1/8/9", rule: "7/1/8/9" } },
  { label: "Family conflict", desktop: { text: "5/9/7/17", rule: "6/9/7/16" }, mobile: { text: "8/1/10/9", rule: "9/1/10/9" } },
  { label: "Special needs parenting", desktop: { text: "7/9/9/17", rule: "8/9/9/16" }, mobile: { text: "10/1/12/9", rule: "11/1/12/9" } },
  { label: "Depression", desktop: { text: "9/9/11/17", rule: "10/9/11/16" }, mobile: { text: "12/1/14/9", rule: "13/1/14/9" } },
  { label: "marriage", desktop: { text: "11/9/13/17" }, mobile: { text: "14/1/16/9" } },
];

const COLUMN_TWO: ExpertiseItem[] = [
  { label: "anxiety", desktop: { text: "1/17/3/25", rule: "2/17/3/24" }, mobile: { text: "16/1/18/9", rule: "15/1/16/9" } },
  { label: "relationships", desktop: { text: "3/17/5/25", rule: "4/17/5/24" }, mobile: { text: "18/1/20/9", rule: "17/1/18/9" } },
  { label: "children", desktop: { text: "5/17/7/25", rule: "6/17/7/24" }, mobile: { text: "20/1/22/9", rule: "19/1/20/9" } },
  { label: "teens", desktop: { text: "7/17/9/25", rule: "8/17/9/24" }, mobile: { text: "22/1/24/9", rule: "21/1/22/9" } },
  { label: "intimacy & connection", desktop: { text: "9/17/11/25", rule: "10/17/11/24" }, mobile: { text: "24/1/26/9", rule: "23/1/24/9" } },
  { label: "…and more.", desktop: { text: "11/17/13/25" }, mobile: { text: "26/1/28/9" } },
];

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
          <ExpertiseColumn items={COLUMN_ONE} />
          <ExpertiseColumn items={COLUMN_TWO} />
        </div>
      </div>
    </section>
  );
}
