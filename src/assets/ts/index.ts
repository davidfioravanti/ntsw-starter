// =======================================================
// MODULE IMPORTS
// =======================================================
import LangManager from "./lang/lang-manager";
// =======================================================
// ASSET IMPORTS
// =======================================================
import "../scss/index.scss";

const langManager = new LangManager();
const lang = langManager.language;
const { application } = lang.common;

$("body").html(
    [
        `<div id="root">`,
        `   <h1>`,
        `       ${`${application.name} (v${application.version})`}`,
        `   </h1>`,
        `   <div class="container">`,
        `       <p>`,
        `           To bundle and run this application, enter the following commands:`,
        `           <br/>`,
        `           <code>`,
        `               yarn build <br/>`,
        `               yarn start`,
        `           </code>`,
        `       </p>`,
        `   </div>`,
        `</div>`
    ].join("")
);