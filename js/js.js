// se incializa la variable que hara como modelo de la red neuronal
var network = new brain.NeuralNetwork();

// se entrenara a la red neuronal con los colores basico 
// 1 = blanco
// 0 = negro

network.train([
    // rojo 0 verde 0 azul 0 la red lo interperata como blanco
    { input: { rojo: 0, verde: 0, azul: 0 }, output: { color: 1 } },
    // rojo 1 verde 1 azul 1 la red lo interperata como negro
    { input: { rojo: 1, verde: 1, azul: 1 }, output: { color: 0 } },
    // rojo 0 verde 1 azul 0 la red lo interperata como negro
    { input: { rojo: 0, verde: 1, azul: 0 }, output: { color: 0 } }
]);


// creamos la funcion para que la red neuronal aprenda y que haga el cambio de color
function update(color) {
    // obtener el color seleccionado de la paleta de colores
    // se lo pasamos a div que contendra al titulo
    document.getElementById("title1").style.background = color;

    // creamos el objeto para que la red neuronal decida que color colocar al texto
    // en este caso como los valores de los colores son de 255 y la red neuronal se expresa
    // en valores de 0 1 entonces hay que hacer una conversion de la unidades
    // diviendolas en 255 cada color
    var entrada = {
        rojo: color.channels.r / 255,
        verde: color.channels.g / 255,
        azul: color.channels.b / 255,
    }
    // le decimos a la red neuronal que decida cual color seria mejor colocar a la letra
    var resultado = network.run(entrada);
    // si lo que decidio la red es mayor a 0.5 entonces decidira que es color blanco
    if (resultado.color > 0.5) {
        document.getElementById("title1").style.color = "white";
    } else {
        // de lo contario sera el color negro que decida
        document.getElementById("title1").style.color = "black";
    }
}