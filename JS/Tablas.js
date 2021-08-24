document.getElementById("boton").onclick = function () {
    var valor = document.getElementById("numero").value;
    suma(valor);
    multi(valor);
    resta(valor);
    divi(valor);
};

var suma = (valor) => {
    var contenedor = document.getElementById("suma");
    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += ` <tr>
                <td>${valor}</td>
                <td>+</td>
                <td>${i}</td>
                <td>=</td>
                <td>${parseFloat(valor)+i}</td>
                </tr>`;
    }
    let html1 = `<table>${html}</table>`;
    contenedor.innerHTML = html1;
};
var resta = (valor) => {
    var contenedor = document.getElementById("resta");
    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += ` <tr>
                <td>${valor}</td>
                <td>-</td>
                <td>${i}</td>
                <td>=</td>
                <td>${parseFloat(valor)-i}</td>
                </tr>`;
    }
    let html1 = `<table>${html}</table>`;
    contenedor.innerHTML = html1;
};
var divi = (valor) => {
    var contenedor = document.getElementById("division");
    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += ` <tr>
                <td>${valor}</td>
                <td>/</td>
                <td>${i}</td>
                <td>=</td>
                <td>${parseFloat(valor)/i}</td>
                </tr>`;
    }
    let html1 = `<table>${html}</table>`;
    contenedor.innerHTML = html1;
};
var multi = (valor) => {
    var contenedor = document.getElementById("multi");
    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += ` <tr>
                <td>${valor}</td>
                <td>x</td>
                <td>${i}</td>
                <td>=</td>
                <td>${parseFloat(valor) * i}</td>
                </tr>`;
    }
    let html1 = `<table>${html}</table>`;
    contenedor.innerHTML = html1;
};

