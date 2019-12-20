// requireds

//const fs = require('express');
//const fs = require('./fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]; // guion bajo para hacer referencia al arreglo

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                return console.log(`Archivo creado: ${archivo}`.green);
            })
            .catch(err => {
                return console.log(err);
            });
        break;
    default:
        console.log('Comando no reconocido');
}


//let base = "8";
//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.base);

/* let parametro = argv[2];
let base = parametro.split('=')[1] */

//console.log(base);