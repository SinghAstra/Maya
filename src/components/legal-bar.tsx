import { Block } from "@/components/block";

export function LegalBar() {
  return (
    <div className="bg-teal" style={{ padding: "20px 0" }}>
      <div className="container-page">
        <div className="fe-grid" style={{ gridAutoRows: "auto" }}>
          <Block d="1/1/2/17" m="1/1/2/9" className="block-text">
            <p>© 2025 Conejo Valley Family Counseling</p>
          </Block>
          <Block d="1/19/2/25" m="2/1/3/9" className="block-text">
            <p>
              <a href="#">Privacy Policy</a>
              <br />
              <a href="#">Sitemap</a>
            </p>
          </Block>
        </div>
      </div>
    </div>
  );
}
