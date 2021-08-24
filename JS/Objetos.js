const cursos = {
    Desarrollo_Web: {
        Estudiantes: [{
            Nombre: 'Juan',
            Nota: 10
        }, {
            Nombre: 'Maria',
            Nota: 30
        }, {
            Nombre: 'Carlos',
            Nota: 20
        }, {
            Nombre: 'Karla',
            Nota: 40
        }]
    },
    Programacion_2: {
        Estudiantes: [{
            Nombre: 'Lili',
            Nota: 30
        }, {
            Nombre: 'Cleo',
            Nota: 40
        }, {
            Nombre: 'Pedro',
            Nota: 33
        }, {
            Nombre: 'Marco',
            Nota: 21
        }]
    }
}
//Object Destructoring 
const {
    Desarrollo_Web,
    Programacion_2
} = cursos;

//template string
function mostrar_DW() {
    const contenedor = document.querySelector('#DesarrolloWeb');
    let html = '';
    for (let i = 0; i < 4; i++) {
        if (Desarrollo_Web.Estudiantes[i].Nota > 10 && Desarrollo_Web.Estudiantes[i].Nota <= 20) {
            html += `<li class="verde">
        Nombre: ${Desarrollo_Web.Estudiantes[i].Nombre} - Nota: ${Desarrollo_Web.Estudiantes[i].Nota}
        </li>`
        }
        if (Desarrollo_Web.Estudiantes[i].Nota <= 10) {
            html += `<li class="rojo">
        Nombre: ${Desarrollo_Web.Estudiantes[i].Nombre} - Nota: ${Desarrollo_Web.Estudiantes[i].Nota}
        </li>`
        }
        if (Desarrollo_Web.Estudiantes[i].Nota > 20) {
            html += `<li class="azul">
        Nombre: ${Desarrollo_Web.Estudiantes[i].Nombre} - Nota: ${Desarrollo_Web.Estudiantes[i].Nota}
        </li>`
        }
    }
    let html1 = `<ul><li><h1>Desarrollo Web</h1></li>${html}</ul>`;
    contenedor.innerHTML = html1;
}

function mostrar_programacion() {
    const contenedor = document.querySelector('#programacion');
    let html = '';
    for (let i = 0; i < 4; i++) {
        if (Programacion_2.Estudiantes[i].Nota > 10 && Programacion_2.Estudiantes[i].Nota <= 20) {
            html += `<li class="verde">
        Nombre: ${Programacion_2.Estudiantes[i].Nombre} - Nota: ${Programacion_2.Estudiantes[i].Nota}
        </li>`
        }
        if (Programacion_2.Estudiantes[i].Nota <= 10) {
            html += `<li class="rojo">
        Nombre: ${Programacion_2.Estudiantes[i].Nombre} - Nota: ${Programacion_2.Estudiantes[i].Nota}
        </li>`
        }
        if (Programacion_2.Estudiantes[i].Nota > 20) {
            html += `<li class="azul">
        Nombre: ${Programacion_2.Estudiantes[i].Nombre} - Nota: ${Programacion_2.Estudiantes[i].Nota}
        </li>`
        }

    }
    let html1 = `<ul><li><h1>Programación 2</h1></li>${html}</ul>`;
    contenedor.innerHTML = html1;

}

function cambiar_colores() {
    var valor = document.querySelectorAll('.verde'),
        valor2 = document.querySelectorAll('.rojo'),
        valor3 = document.querySelectorAll('.azul')

    if (valor != null) {
        for (var i = 0; i < valor.length; i++) valor[i].style.color = 'green';
    }
    if (valor2 != null) {
        for (var i = 0; i < valor2.length; i++) valor2[i].style.color = 'red';
    }
    if (valor3 != null) {
        for (var i = 0; i < valor3.length; i++) valor3[i].style.color = 'blue';
    }
}