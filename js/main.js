const FIFO = require('./classes/FIFO.js');
require ('./classes/Proceso.js')
let miLista = new FIFO();
for (let i = 0; i < 300; i++) {
    //simulacion de la llegada o no llegada de un proceso
    let numero = Math.ceil(Math.random() * 100);
    if (numero <= 39) {
        let nuevo = new Proceso(Math.ceil(Math.random() * 100));
        miLista.agregar(nuevo)
    }
    if (miLista.ver() != null) {
        miLista.ver().tiempo--; //Me regresa proceso restar();
        if (miLista.ver().tiempo==0) {
            miLista.vacia();
        }
    }
}