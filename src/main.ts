import "./style.css";

import getScientistsByArea from "./01-bases/08-02-imp-exp-homework";

console.log(getScientistsByArea("Physics"));

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>TypeScript</h1>
  </div>
`;
