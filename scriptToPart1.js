;(function(){
  var xhr = new XMLHttpRequest(); //создаем запрос
  xhr.open('GET','https://dl.dropboxusercontent.com/u/53408179/phones.json',true); // настраиваем
  xhr.send(); //посылаем
  xhr.onreadystatechange = function(){
    if(xhr.readyState != 4) return; // если еще ничего не получили-ничего не надо возвращать
    if(xhr.status != 200){
      alert(xhr.status +':'+xhr.statusText); // если есть ошибки выводим айди ошибки
    }
    else{
     array = JSON.parse(xhr.responseText); // JSON to JS
     var list= document.createElement('ul'); // создаем список
     document.body.appendChild(list);
     for(var i=0; i < array.length;i++){ // добавляем элементы списка
       var li = document.createElement('li');
       li.innerHTML = array[i].name;
       list.appendChild(li);
     }
    }
  }
})();
