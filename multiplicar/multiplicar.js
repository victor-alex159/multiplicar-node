/* const fs = require('fs'); //fyle system

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducio ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            let res = base * i;
            data += (`${base}*${i} = ${res}\n`);
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}
module.exports = {
    crearArchivo
} */
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('=============='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=============='.green);
    for (let i = 1; i <= limite; i++) {
        let res = base * i;
        console.log(`${base}*${i} = ${res}\n`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += (`${base}*${i} = ${res}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                console.log(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}