import { r as reactExports } from "./index-kwy3CwmH.js";
function MetaTags({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  schema
}) {
  reactExports.useEffect(() => {
    document.title = title;
    const setMeta = (name, content, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${name}"]`
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    if (ogImage) setMeta("og:image", ogImage, true);
    setMeta("twitter:card", ogImage ? "summary_large_image" : "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (schema) {
      const schemaId = "__json-ld-schema";
      let scriptEl = document.getElementById(
        schemaId
      );
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = schemaId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, ogImage, ogType, schema]);
  return null;
}
export {
  MetaTags as M
};
