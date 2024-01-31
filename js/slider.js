(function(){
    const flechaDer = document.querySelector('.slider-arrow-right')
    const flechaIzq = document.querySelector('.slider-arrow-left')
    const imagenes = document.querySelector('.imagen1')
    var imagenActId = Number(document.querySelector('.slider-img--show').id)
    const imagenAct = document.querySelector('.slider-img--show')
      
    flechaDer.addEventListener('click', ()=>{
            if(imagenActId === 3){
                document.getElementById(imagenActId).classList.remove('slider-img--show')
                imagenActId = 1
                document.getElementById(imagenActId).classList.add('slider-img--show')
            }

            else{
                document.getElementById(imagenActId).classList.remove('slider-img--show')
                imagenActId += 1
                document.getElementById(imagenActId).classList.add('slider-img--show')
            }

    })

    flechaIzq.addEventListener('click', ()=>{
        if(imagenActId === 1){
            document.getElementById(imagenActId).classList.remove('slider-img--show')
            imagenActId = 3
            document.getElementById(imagenActId).classList.add('slider-img--show')
        }
        else{
            document.getElementById(imagenActId).classList.remove('slider-img--show')
                imagenActId -= 1
                document.getElementById(imagenActId).classList.add('slider-img--show')
        }
    })

    
}())