var Reserva = function(Date, qDePersonas, precio, codigo) {
    this.date = Date,
    this.qDePersonas = qDePersonas,
    this.precioPorPersona = precio,
    this.codigoDescuento = codigo
}




Reserva.prototype.calcularPrecioTotal = function(){
    const reserva = this
    const precioBase = reserva.calcularPrecioBase()
    let descuentos = reserva.calcularDescuentos(reserva)
    let adicionales = reserva.calcularAdicionales(reserva)
    const precioTotal = precioBase + adicionales - descuentos
    console.log({precioBase, adicionales, descuentos, precioTotal})
    return precioTotal
    
}

Reserva.prototype.calcularPrecioBase = function(){
    const precioBase = this.precioPorPersona * this.qDePersonas
    return precioBase 
}

Reserva.prototype.descuentoPorComensales = function(reserva){
    
    const precioBase = reserva.calcularPrecioBase(reserva)
    let descuentosPorComensales = 0
    const comensales = reserva.qDePersonas

    comensales >= 4 && comensales <= 6 ? (descuentosPorComensales += (0.05*precioBase)) :
 
    comensales >= 7 && comensales <= 8 ?( descuentosPorComensales += (0.10*precioBase)) :

    comensales > 8 ?( descuentosPorComensales += (0.15*precioBase)):

    descuentosPorComensales += 0

    return descuentosPorComensales
}

Reserva.prototype.descuentoPorCodigo= function(reserva){
    const precioBase = reserva.calcularPrecioBase(reserva)
    const codigo = reserva.codigoDescuento;
    let descuentosPorCodigo = 0;

    codigo === "DES15" ? ( descuentosPorCodigo += (0.15*precioBase)) :

    codigo === "DES200" ? ( descuentosPorCodigo += 200) :

    codigo === "DES1" ? (descuentosPorCodigo += reserva.precioPorPersona) :

    descuentosPorCodigo += 0;

     
    return descuentosPorCodigo
}


Reserva.prototype.calcularDescuentos = function(reserva){
   
 
    const descuentoPorComensales = reserva.descuentoPorComensales(reserva)
    const descuentoPorCodigo = reserva.descuentoPorCodigo(reserva)
    return descuentoPorCodigo + descuentoPorComensales
     

}

Reserva.prototype.calcularAdicionales = function(reserva){
    let adicionales = 0;
    const fecha = reserva.date
    const horaReserva = fecha.getHours()
    const precioBase = reserva.calcularPrecioBase()
    const diaDeSemana = fecha.getDay()
    
    horaReserva == 13 || horaReserva == 20 ? (adicionales = precioBase * 0.05 ) :
    diaDeSemana > 3 ? ((console.log("entro en día de semana")), adicionales = precioBase * 0.10) :
    adicionales = 0
    return adicionales
    }



