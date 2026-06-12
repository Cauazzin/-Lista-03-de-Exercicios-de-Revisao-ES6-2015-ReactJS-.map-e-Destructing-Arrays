const links = [
  { texto: "GitHub", url: "https://github.com" },
  { texto: "React Docs", url: "https://react.dev" }
];

const tagsHTML = links.map(({ texto, url }) => `<a href="${url}">${texto}</a>`);

console.log(tagsHTML);
// [ '<a href="https://github.com">GitHub</a>', '<a href="https://react.dev">React Docs</a>' ]