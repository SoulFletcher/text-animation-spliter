var documentFragment = document.createDocumentFragment();
var my_buttons = document.querySelectorAll('.menu__btn');
var texts = []
var arrays = []
my_buttons.forEach(element => {
    texts.push(element.innerText)
    arrays.push(element.innerText.split(''))
    element.addEventListener('mouseenter', move)
});

function move(){
    for (let index = 0; index < my_buttons.length; index++) {
    my_buttons[index].innerText = '';
    let c = 0
    arrays[index].forEach(element => { 
        c += 190/texts[index].length
        let a = document.createElement("div");
        a.innerText = `${element}`;
        a.style.transitionDelay = `${c}ms`
        my_buttons[index].append(a);
        }); 
    }
    c = 0  
}


