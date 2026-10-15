import { Block } from "@/components/block";
import { FAQS } from "@/data/faqs";

export function Faq() {
  return (
    <section id="faqs" className="section bg-white">
      <div className="container-page">
        <div className="fe-grid">
          <Block desktop="1/4/3/22" mobile="1/1/3/9">
            <h3>
              Frequently asked{" "}
              <strong>
                <em>questions</em>
              </strong>
            </h3>
          </Block>
          {FAQS.map((faq) => (
            <Block key={faq.question} desktop={faq.desktop} mobile={faq.mobile} className="block-text">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </Block>
          ))}
        </div>
      </div>
    </section>
  );
}
