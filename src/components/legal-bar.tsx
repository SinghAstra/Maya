import { Block } from "@/components/block";
import { siteConfig } from "@/config/site";

export function LegalBar() {
  return (
    <div className="bg-teal py-5">
      <div className="container-page">
        <div className="fe-grid auto-rows-auto">
          <Block d="1/1/2/17" m="1/1/2/9" className="block-text">
            <p>© 2025 Conejo Valley Family Counseling</p>
          </Block>
          <Block d="1/19/2/25" m="2/1/3/9" className="block-text">
            <p>
              <a href={siteConfig.url}>Privacy Policy</a>
              <br />
              <a href={siteConfig.url}>Sitemap</a>
            </p>
          </Block>
        </div>
      </div>
    </div>
  );
}
