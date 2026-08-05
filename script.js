const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const imagem = document.getElementById("imagem");

let tamanhoSim = 1;
let tamanhoNao = 1;

const gifs = [
    "imagens/Hikaru ga Shinda Natsu.jpg"
];

let indice = 0;

nao.addEventListener("click", () => {

    tamanhoSim += 0.2;
    sim.style.transform = `scale(${tamanhoSim})`;

    tamanhoNao -= 0.15;
    if (tamanhoNao < 0.2) {
        tamanhoNao = 0.2;
    }
    nao.style.transform = `scale(${tamanhoNao})`;

    if (indice < gifs.length - 1) {
        indice++;
        imagem.src = gifs[indice];
    }
});

sim.addEventListener("click", () => {
    window.location.href = "carta.html";
});