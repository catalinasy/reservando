var Reserva = function(Date, qDePersonas, precio, codigo) {
    this.date = new Date (),
    this.qDePersonas = qDePersonas,
    this.precioPorPersona = precio,
    this.codigoDescuento = codigo,
}

Reserva.prototype.calcularPrecioBase = () =>{
    return this.precioPorPersona * this.qDePersonas
}

Reserva.prototype.calcularPrecioTotal = () =>{
    const precioBase = reserva.calcularPrecioBase
    let descuentos = 0
    const comensales = this.qDePersonas
    const codigoDescuento = this.codigoDeDescuento
    let adicionales = 0
    const horaReserva = this.Date.hor_num 
    let diaDeSemana = this.Date.getDay()

    if(comensales >= 4 && comensales <= 6){
        descuentos = (0.05*precioBase)
    }
    else if(comensales >= 7 && comensales <= 8){
        descuentos = (0.10*precioBase)
    }
    else if(comensales > 8 ){
        descuentos = (0.15*precioBase)
    }

    if(codigoDescuento === DES15) {
        descuentos = (0.15*precioBase)
    } 
    else if (codigoDescuento === DES200){
        descuentos = 200
    }
    else if (codigoDescuento === DES1){
        descuento = this.precioPorPersona
    }

    if(horaReserva === 13 || horaReserva === 20){
        adicionales = precioBase * 0.05
    }
    if(diaDeSemana >3){
        adicionales = precioBase * 0.10
    }

    //como hago para comprar los horarios? si los horarios estan actualmente cargados como un string?
    
// Adicional por horario: las franjas horarias de 13 a 14 y de 20 a 21 horas son muy concurridas. Se agrega un adicional del 5% si la reserva 
//fue hecha para un horario dentro de esos rangos. Adicional por fin de semana: si la reserva fue realizada para alguno de los días del fin de
//semana (viernes, sábado o domingo) se le agrega un adicional del 10%.

    var precioTotal =  precioBase + adicionales - descuentos
    console.log(precioTotal)
}

