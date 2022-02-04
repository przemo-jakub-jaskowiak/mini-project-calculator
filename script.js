const btnC = document.querySelectorAll('.calc-btn');

const display = document.querySelector('.display');

btnC.forEach(button=>{
    button.addEventListener('click',(e)=>{
        
        console.log(e.target.innerText);

        switch(e.target.innerText){
            case'=':
            try{
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error"
            }
            break;
            case 'C':
                display.innerText = '';
             break;
             case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})