module.exports = function hasMermaid(content, opt) {  
  if (content.indexOf('class="mermaid"') !== -1) {
    return `<script src="https://unpkg.com/mermaid/dist/mermaid.min.js"></script>
  <script>mermaid.initialize({ startOnLoad: true });</script>
`;
    } else {
    return "";
  }
}
