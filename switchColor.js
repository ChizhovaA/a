function color(element){
    let buttonStyle = getComputedStyle(element);
    let buttonBgColor = buttonStyle.backgroundColor;
    let buttons = document.querySelectorAll('.btn');
    if (element.classList.contains('active')) {
      element.classList.remove('active');
      document.body.style.backgroundColor = '#F5F5F5';
    }
    else {
      document.body.style.backgroundColor = buttonBgColor;
      buttons.forEach(btn => btn.classList.remove('active'));
      element.classList.add('active');  
}}



