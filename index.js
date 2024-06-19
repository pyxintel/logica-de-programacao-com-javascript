alert("Olá, sou o PyxMower! Me ajude a voltar para a base.")

let largura = prompt("Qual a largura do terreno (m) ?");
let comprimento = prompt("Qual o comprimento do terreno (m) ?");

let x1 = 0;
let y1 = 0;
let x2 = largura;
let y2 = comprimento;
let px = parseInt(Math.random() * x2 + 1);
let py = parseInt(Math.random() * y2 + 1);

while (px != 0 || py != 0) {
    let movimento = prompt(`[Pos: ${px},${py}] Indique o movimento (direção, passos - ex.: n,3)`);
    let arrMov = movimento.split(',');
    let direcao = arrMov[0].toUpperCase();    
    let passos = parseInt(arrMov[1]);
    if (direcao == 'N') {
        py = py + passos;
    } else if (direcao == 'S') {
        py = py - passos;
    } else if (direcao == 'L') {
        px = px + passos;
    } else if (direcao == 'O') {
        px = px - passos;
    }
}

alert("Carregando...")