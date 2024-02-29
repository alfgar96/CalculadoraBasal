const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');


CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = (calcFlujo(DATO));        
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2= ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});



function calcFlujo(peso){
    if (peso > 0 && peso <= 10){
        dosis = 100 * peso;
        fluj = Math.round(dosis/24);
    } else if (peso > 10 && peso <= 20){
        dosis = ( peso - 10 ) * 50 + 1000;
        fluj = Math.round(dosis/24);
    } else if (peso >20 && peso <=30){
        dosis = ( peso - 20 ) * 20 + 1500;
        fluj = Math.round(dosis/24);
    } else if (peso > 30 && peso <=200) {
        dosis = ((peso * 4) + 7) / ((parseInt(peso) + 90)) * 1500;
        fluj = Math.round(dosis/24);
    }
    return fluj;
}

