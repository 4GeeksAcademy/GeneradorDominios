let pronoun = ["the", "our", "this", "your", "my", "her", "his", "those"];
let adj = [
  "great",
  "big",
  "most",
  "little",
  "colorfull",
  "fantastic",
  "magic",
  "prettier"
];
let noun = [
  "jogger",
  "racoon",
  "dog",
  "cat",
  "person",
  "sheet",
  "thing",
  "name",
  "bed"
];
let domain = [".com", ".es", ".net", ".org", ".co", ".us", ".io"];

function generadorDominios() {
  let randomPronoun = Math.floor(Math.random() * pronoun.length);
  let randomAdj = Math.floor(Math.random() * adj.length);
  let randomNoun = Math.floor(Math.random() * noun.length);
  let randomDomain = Math.floor(Math.random() * domain.length);

  return (
    "www." +
    pronoun[randomPronoun] +
    adj[randomAdj] +
    noun[randomNoun] +
    domain[randomDomain]
  );
}

for (let i = 0; i < 15; i++) {
  var miDominio = document.getElementById("dominio");
  miDominio.innerHTML = miDominio.innerHTML + "<br/>" + generadorDominios();
}
