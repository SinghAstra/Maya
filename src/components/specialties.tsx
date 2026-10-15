import { Fragment } from "react";
import { Block } from "@/components/block";
import { UnderlineButton } from "@/components/underline-button";
import { SPECIALTIES } from "@/data/specialties";

export function Specialties() {
  return (
    <section id="specialties" className="section bg-white">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="3/2/7/9" mobile="3/1/5/9">
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
              <Block desktop={item.desktop.card} mobile={item.mobile.card} className="block-text">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </Block>
              <Block desktop={item.desktop.button} mobile={item.mobile.button}>
                <UnderlineButton href={item.href}>Learn more</UnderlineButton>
              </Block>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
