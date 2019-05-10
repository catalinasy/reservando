
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
})

describe('Test para puntuaciones', ()  =>{
    it('test para Puntuaciones', ()=>{
        var restaurant = listado.buscarRestaurante(2)
        var puntuacion = restaurant.obtenerPuntuacion()
        
        function calcularPromedio(arr){
            var sumatoria = 0
            for(var i = 0; i<arr.length; i++){
                sumatoria+= arr[i]
            }
            var promedio = sumatoria/arr.length;
            return Math.round(promedio*10)/10;
        }
    
        var promedio = calcularPromedio(restaurant.calificaciones)
    
        expect(puntuacion).to.equal(promedio)
    });
    it('restaurante sin Calificacion, puntuación = 0', () =>{
        var restaurante = listado.buscarRestaurante(2);
        restaurante.calificaciones = []
        var puntuacion = restaurante.obtenerPuntuacion()
        expect(puntuacion).to.equal(0)
    });
    it('testear nueva calificacion dentro del rango', () =>{
        var restaurant = listado.buscarRestaurante(3)
        restaurant.calificar(5)

        var ultimaCal = restaurant.calificaciones[restaurant.calificaciones.length -1]

        expect(ultimaCal).to.equal(5)
    })
    it('nueva calificacion superior al rango', () =>{
        var restaurant = listado.buscarRestaurante(2)
        var califAnterior = restaurant.calificaciones.length
        restaurant.calificar(130)
        var qdeCalif = restaurant.calificaciones.length
        expect(qdeCalif).to.equal(califAnterior)
    })
    it('nueva Calificacion = 0 ', () =>{
        var restaurant = listado.buscarRestaurante(2)
        var califAnterior = restaurant.calificaciones.length
        restaurant.calificar(0)
        var qdeCalif = restaurant.calificaciones.length
        expect(qdeCalif).to.equal(califAnterior)
    })
    it('nueva Calificacion menos que cero', () =>{
        var restaurant = listado.buscarRestaurante(2)
        var califAnterior = restaurant.calificaciones.length
        restaurant.calificar(-30)
        var qdeCalif = restaurant.calificaciones.length
        expect(qdeCalif).to.equal(califAnterior)
    })
})

describe('testeo funcion buscar restaurante por id', () =>{
    it('buscar id existente', () =>{
        var restaurant = listado.buscarRestaurante(2)
        var restaurantEncontrado = listadoDeRestaurantes[1]

        expect(restaurant).to.equal(restaurantEncontrado)
    })
    it('buscar id no existente positiva', () =>{
        var restaurant = listado.buscarRestaurante(75)
        expect(restaurant).to.be.a('string')
    })
    it('buscar id no existente, 0', () =>{
        var restaurant = listado.buscarRestaurante(0)
        expect(restaurant).to.be.a('string')
    })
    it('buscar id no existente, negativo', () =>{
        var restaurant = listado.buscarRestaurante(-10)
        expect(restaurant).to.be.a('string')
    })
})

describe('testeo obtener restaurante', ()=>{
    it('buscar restaurante por rubro',()=>{
        var restauranteRubro = listado.obtenerRestaurantes('Asiática', null, null)
        var resultadoManual = listadoDeRestaurantes.filter(restaurant => restaurant.rubro == 'Asiática');
        expect(restauranteRubro).to.eql(resultadoManual)
    })
    it('buscar restaurante por Ubicacion',()=>{
       
        var restauranteUbicacion = listado.obtenerRestaurantes(null, 'Nueva York', null)
        var resultadoManual = listadoDeRestaurantes.filter(restaurant => restaurant.ubicacion == 'Nueva York');
        expect(restauranteUbicacion).to.eql(resultadoManual)
    })
    it('buscar restaurante por Horario',()=>{
       
        var restauranteHorario = listado.obtenerRestaurantes(null, null,'15:30')
        var resultadoManual = listadoDeRestaurantes.filter(res => {
            return res.horarios.some(horario => horario == '15:30');
        });
        expect(restauranteHorario).to.eql(resultadoManual)
    })
    it('buscar combinacion de parametros sin resultado',()=>{
        var restaurante = listado.obtenerRestaurantes('Berlín', 'Hamburguesa', '13:00')
        expect(restaurante).to.eql([])
    })
    
})

describe('Testear Nueva Reserva', ()=>{

    it('calcular precio total', ()=>{
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
        
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        return reserva1.calcularPrecioTotal();
    })
})