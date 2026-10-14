import { Fragment } from "react";
import { Block } from "@/components/block";
import { UnderlineButton } from "@/components/underline-button";
import { SPECIALTIES } from "@/data/specialties";

export function Specialties() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="fe-grid">
          <Block d="3/2/7/9" m="3/1/5/9">
            <h3>
              Our{" "}
              <strong>
                <em>specialties</em>
              </strong>{" "}
              include&hellip;
            </h3>
          </Block>
          {SPECIALTIES.map((item) => (
            <Fragment key={item.title}>
              <Block d={item.desktop.card} m={item.mobile.card} className="block-text">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </Block>
              <Block d={item.desktop.button} m={item.mobile.button}>
                <UnderlineButton href={item.href}>Learn more</UnderlineButton>
              </Block>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
