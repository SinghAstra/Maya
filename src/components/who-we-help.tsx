import { Block } from "@/components/block";
import { CoverImage } from "@/components/cover-image";
import { siteConfig } from "@/config/site";

export function WhoWeHelp() {
  return (
    <section className="section sec-medium bg-white">
      <div className="container-page">
        <div className="fe-grid">
          <Block d="1/1/3/9" m="1/1/3/9">
            <h2>
              Who we{" "}
              <strong>
                <em>help</em>
              </strong>
            </h2>
          </Block>
          <Block d="4/4/15/11" className="img-block" m="4/1/13/9">
            <CoverImage src="/images/adults.jpg" alt="Adults in therapy" />
          </Block>
          <Block d="16/4/21/11" m="14/1/20/9" className="block-text">
            <h4>Adults</h4>
            <p>
              Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with
              confidence by addressing the root causes of anxiety, stress, and emotional pain.
            </p>
          </Block>
          <Block d="4/11/15/18" className="img-block" m="21/1/30/9">
            <CoverImage src="/images/couples.jpg" alt="Couple in therapy" />
          </Block>
          <Block d="16/11/22/18" m="31/1/37/9" className="block-text">
            <h4>
              <a href={siteConfig.url}>Couples</a>
            </h4>
            <p>
              Relationships require effort, and we&rsquo;re here to help you strengthen yours. We guide couples through
              challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen
              your relationship.
            </p>
          </Block>
          <Block d="4/18/15/25" className="img-block" m="38/1/47/9">
            <CoverImage src="/images/children.jpg" alt="Children and teens in therapy" />
          </Block>
          <Block d="16/18/22/25" m="48/1/54/9" className="block-text">
            <h4>
              <a href={siteConfig.url}>Children</a> &amp; Teens
            </h4>
            <p>
              Kids need support, too. We help them process big emotions, cope with challenging family situations, build
              coping skills, and feel understood, while also working closely with their parents to create a nurturing
              environment.
            </p>
          </Block>
        </div>
      </div>
    </section>
  );
}
