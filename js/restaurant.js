var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    const result = this.horarios.filter(r=> {
         r.horarios == horarioReservado;
        })
        console.log(result)
    }


Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.sumar = function(array){
    var sumatoria = 0;
        for (var i = 0; i < array.length; i++) {
            sumatoria += array[i]
        }
    return sumatoria;
}

Restaurant.prototype.promedio = function(restaurant){
    var sumatoria = restaurant.sumar(restaurant.calificaciones)
    var promedio = sumatoria /restaurant.calificaciones.length;
    return Math.round(promedio * 10) / 10;
}


Restaurant.prototype.obtenerPuntuacion = function() {
    var restaurant = this
    if (restaurant.calificaciones.length === 0) {
        return 0;
    } else {
        return restaurant.promedio(restaurant)
    }
}