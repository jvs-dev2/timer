let segundos = document.getElementById('segundos');
let minutos = document.getElementById('minutos');
let horas = document.getElementById('horas');
let start = document.getElementById('start');

start.onclick = function () {

    if (segundos.value == 0 && minutos.value == 0 && horas.value == 0) {
        alert("Ocorreu um erro");
    }
    else {
        segundos.classList.add('active');
        minutos.classList.add('active');
        horas.classList.add('active');
        timer = setInterval(() => {
            if (segundos.value > 0) {
                segundos.value = segundos.value - 1;   
            }
            if (segundos.value == 0 && minutos.value > 0) {
                minutos.value = minutos.value - 1;
                segundos.value = segundos.value = 59;
            }
            if (minutos.value == 0 && horas.value > 0) {
                horas.value = horas.value - 1;
                minutos.value = minutos.value = 60;
            }
            if (segundos.value == 0 && minutos.value == 0 && horas.value == 0) {
                alert("o tempo acabou")
                segundos.classList.remove('active');
                minutos.classList.remove('active');
                horas.classList.remove('active');
                clearInterval(timer)
            }
        }, 1000);
    }
}

