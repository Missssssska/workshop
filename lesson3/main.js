import Wrapper from "./constructor/Wrapper.js";
import content from "./modules/content.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";
import sidebar from "./modules/sidebar.js";
import sameCard from "./modules/sameContent.js";
import body from "./modules/body.js";


new Wrapper('#app', [header, body, footer]);
new Wrapper('#root', [sidebar]);