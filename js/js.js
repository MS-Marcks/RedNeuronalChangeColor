var network = new brain.NeuralNetwork();

network.train([
    { input: { rojo: 0, verde: 0, azul: 0 }, output: { color: 1 } },
    { input: { rojo: 1, verde: 1, azul: 1 }, output: { color: 0 } },
    { input: { rojo: 0, verde: 1, azul: 0 }, output: { color: 0 } }
]);
function update(color) {
    document.getElementById("title1").style.background = color;
    var entrada = {
        rojo: color.channels.r / 255,
        verde: color.channels.g / 255,
        azul: color.channels.b / 255,
    }

    var resultado = network.run(entrada);
    if (resultado.color > 0.5) {
        document.getElementById("title1").style.color = "white";
    } else {
        document.getElementById("title1").style.color = "black";
    }
}