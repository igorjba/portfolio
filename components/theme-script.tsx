/**
 * Roda antes do primeiro paint: aplica o tema salvo (default dark) no <html> para
 * nao haver flash. Inline por necessidade — precede a hidratacao e qualquer render.
 */
const script = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark")}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
