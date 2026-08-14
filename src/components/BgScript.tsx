const BG_INIT = `
(function () {
  try {
    var stored = localStorage.getItem("bg");
    var bg = stored === "lines" ? "lines" : "orbs";
    document.documentElement.setAttribute("data-bg", bg);
  } catch (e) {}
})();
`;

export default function BgScript() {
  return <script dangerouslySetInnerHTML={{ __html: BG_INIT }} />;
}
