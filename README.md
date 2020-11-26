Crear un módulo para NodeJs que represente una estructura tipo FIFO, cuando requiera usarla haría un :   

const FIFO=require('./fifo');   
let miFifo=new FIFO();   
miFifo.agregar(nuevo)   
miFifo.dequeue()-> elemento   
miFifo.ver()   
miFifo.vacia()   
{ agregar, sacar, ver, vacia} o {enqueue, dequeue, peek, isEmpty}