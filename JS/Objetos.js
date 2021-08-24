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
function mostrar_DW (){
const contenedor1 = document.querySelector('#DesarrolloWeb');
let html = `<ul>
                <li>
                <h1>Desarrollo Web</h1>
                </li>
                <li>
                Nombre: ${Desarrollo_Web.Estudiantes[0].Nombre} Nota: ${Desarrollo_Web.Estudiantes[0].Nota}
                </li>
                <li>
                Nombre: ${Desarrollo_Web.Estudiantes[1].Nombre} Nota: ${Desarrollo_Web.Estudiantes[1].Nota}
                </li>
                <li>
                Nombre: ${Desarrollo_Web.Estudiantes[2].Nombre} Nota: ${Desarrollo_Web.Estudiantes[2].Nota}
                </li>
                <li>
                Nombre: ${Desarrollo_Web.Estudiantes[3].Nombre} Nota: ${Desarrollo_Web.Estudiantes[3].Nota}
                </li>
            </ul>`;
contenedor1.innerHTML = html;
}
function mostrar_programacion (){
    const contenedor1 = document.querySelector('#programacion');
    let html;
    for(let i = 0; i < 4; i++){
        html += `<li>
        Nombre: ${Programacion_2.Estudiantes[i].Nombre} Nota: ${Programacion_2.Estudiantes[i].Nota}
        </li>`
    }
    let html1 = `<ul><li><h1>Programación 2</h1></li>${html}</ul>`;
    contenedor1.innerHTML = html1;
    }