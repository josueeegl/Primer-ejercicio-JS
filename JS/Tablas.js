document.getElementById('boton').onclick = () => { 
    var valor = document.getElementById('numero').value;
    var contenedor = document.getElementById('multi');
    let html = '';
    for (let i=1; i <= 10; i++){
        html += ` <tr>
        <td>${valor}</td>
        <td>x</td>
        <td>${i}</td>
        <td>=</td>
        <td>${valor * i}</td>
      </tr>`;
    }
    let html1 = `<table>${html}</table>`;
    contenedor.innerHTML = html1;
};