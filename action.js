const list = document.getElementsByTagName('button');
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', logButtonClick);
}
function logButtonClick(){
  console.log(new Date().toLocaleTimeString(), new Date().toLocaleDateString(), 'Нажатие на кнопку');
  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

