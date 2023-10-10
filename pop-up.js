const btn = document.querySelector('#action');
const tbl = document.querySelector('#tbl');
const btns = document.querySelector('.block');
btns.classList.remove('disp');
btn.addEventListener('click', () =>{
    if (tbl.classList.contains('disp') == true){
        tbl.classList.remove('disp');
        btns.classList.add('disp');
    }
    else{
        tbl.classList.add('disp');
        btns.classList.remove('disp');
    }
})




