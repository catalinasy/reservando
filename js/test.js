
var expect = chai.expect
var assert = chai.assert

describe('Test para reservar un horario', function(){
    it('Eliminar Horario reservado', ()=>{
       aplicacion.listado.reservarUnHorario(1, "13:00")
       var restaurante = listado.buscarRestaurante(1) 
       expect(restaurante.horarios).to.not.include('13:00')
    })
    it('disminuir el arreglo', ()=>{
       aplicacion.listado.reservarUnHorario(1, "13:00")
        var restaurante = listado.buscarRestaurante(1)
        assert.lengthOf(restaurante.horarios, 2)
    })
    it('Mantener el arreglo si el horario no existe', function(){
        aplicacion.listado.reservarUnHorario(2, "12:00")
        var restaurante = listado.buscarRestaurante(2)
        assert.lengthOf(restaurante.horarios, 3)
    })
    it('Arreglo se mantiene igual', () =>{
        var restaurante = listado.buscarRestaurante(2)
        var horarios = restaurante.horarios
        aplicacion.listado.reservarUnHorario(2,"22:30" )
        for(var i=0; i<(horarios.length-1); i++){
            horarios[i] == restaurante.horarios[i]
        }


    })
    it('reservar horario sin parametro', ()=>{
        aplicacion.listado.reservarUnHorario(3, "")
        var restaurante = listado.buscarRestaurante(3)
        assert.lengthOf(restaurante.horarios, 3)
    })
});

describe('test para Puntuaciones', ()=>{
    var restaurant = listado.buscarRestaurante(2)
    var puntuacion = restaurant.obtenerPuntuacion()
    var promedio = () => {
        var sumatoria = 0;
        for (var i = 0; i < restaurant.calificaciones.length; i++) {
            sumatoria += restaurant.calificaciones[i]
        }
        var promedio = sumatoria / restaurant.calificaciones.length;
        return Math.round(promedio * 10) / 10;

    }
    expect(puntuacion).to.equal(promedio)
    // Dado un restaurant con determinadas calificaciones, 
    // la puntuación (que es el promedio de ellas) se calcula correctamente.
})