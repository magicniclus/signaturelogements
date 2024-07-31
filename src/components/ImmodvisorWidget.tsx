import Script from "next/script";
import { useEffect } from "react";

const ImmodvisorWidget = () => {
  useEffect(() => {
    // Fetch and inject the structured data script
    fetch(
      "https://api-reviews.immodvisor.com/api/company/richs_snippets?id=41191&key=4APAUZ-WDU3-PSLGP-90LHN-G5L5"
    )
      .then((response) => response.text())
      .then((structuredDataText) => {
        const structuredDataScript = document.createElement("script");
        structuredDataScript.setAttribute("type", "application/ld+json");
        structuredDataScript.textContent = structuredDataText;
        document.head.appendChild(structuredDataScript);
      });
  }, []);

  return (
    <>
      <Script
        id="imdw-js-global"
        src="https://widget3.immodvisor.com/javascripts/imdw-global.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Immodvisor script loaded");
        }}
      />
      <div
        className="imdw-widget"
        data-type="horizontal"
        data-cid="41191"
        data-hash="4APAUZ-WDU3-PSLGP-90LHN-G5L5"
        data-ctype="company"
        data-fp=""
        data-border-color="false"
        data-title="false"
        data-max="20"
        data-wording="plural"
        data-redirect="https://www.immodvisor.com/pro/signature-promotion-bordeaux-33300-41191.html"
        data-review-from="our"
      ></div>
    </>
  );
};

export default ImmodvisorWidget;
