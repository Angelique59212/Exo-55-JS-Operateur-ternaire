let span1 = 5;
let span2 = 12;
let result = document.getElementById("resultat");

result.innerHTML = (span1 === 5 && span2 === 12) ? (span1 + span2).toString(): (span2 - span1).toString();

let para1 = document.getElementById("para1");

if (-10 < 0) {
    para1.innerHTML = " -10 est inférieur à 0";
}

document.body.style.background ="deeppink";
document.body.style.fontSize = "1.4rem";
document.body.style.color = "aqua"