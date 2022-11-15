

function shadow1(options){
    let images = document.querySelector('.shadow1');

    if(options.shadow_type === 'hard'){
        options.shadow_type = '0px';
    }else{
        options.shadow_type = '15px';
    }

    images.foreach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba{0,0,0,0.12}`;

        if(options.padding){
            image.style.padding = '1em';
        }
    })

}

module.exports.shadow1 = shadow1;