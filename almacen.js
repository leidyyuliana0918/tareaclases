class computadores {
    constructor(nombre, precioVenta, precioAlquiler) {
        this.nombre = nombre;
        this.precioVenta = precioVenta;
        this.precioAlquiler = precioAlquiler;
    }
}

class Almacen {
    constructor() {
        this.ingresosVenta = 0;
        this.ingresosAlquiler = 0;
        this.computadores = [];
    }

    vendercomputador(computadores) {
        this.ingresosVenta += computadores.precioVenta;
        console.log(`Se ha vendido el equipo ${computadores.nombre} por $${computadores.precioVenta}`);
    }

    alquilarcomputador(computadores) {
        this.ingresosAlquiler += computadores.precioAlquiler;
        console.log(`Se ha alquilado el equipo ${computadores.nombre} por $${computadores.precioAlquiler}`);
    }

    mostrarIngresos() {
        console.log(`Ingresos por ventas: $${this.ingresosVenta}`);
        console.log(`Ingresos por alquileres: $${this.ingresosAlquiler}`);
    }
}

const computador1 = new computadores ("Asus", 3000000, 5550);
const computador2 = new computadores("hp", 250000, 1100);
const almacen = new Almacen();

almacen.vendercomputador(computador1);
almacen.alquilarcomputador(computador2);
almacen.mostrarIngresos();























