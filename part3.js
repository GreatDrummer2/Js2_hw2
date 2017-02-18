;(function(){
  var xhr = new XMLHttpRequest(); //создаем запрос
  xhr.open('GET','http://localhost/coord.json',true); // настраиваем
  xhr.send(); //посылаем
  xhr.onreadystatechange = function(){
    if(xhr.readyState != 4) return; // если еще ничего не получили-ничего не надо возвращать
    if(xhr.status != 200){
      alert(xhr.status +':'+xhr.statusText); // если есть ошибки выводим айди ошибки
    }
    else{
     console.log(JSON.parse(xhr.responseText));
    }
  }
})();