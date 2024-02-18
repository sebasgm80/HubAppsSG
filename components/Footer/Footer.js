import "./Footer.css";
const template = () => `
<h3><span>&copy ${new Date().getFullYear()} </span> Sebastian Garcia</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
