;(function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://dl.dropboxusercontent.com/u/53408179/phones.json',true);
  xhr.send();
  xhr.onreadystatechange = function(){
    if(xhr.readyState != 4) return;
    if(xhr.status != 200){
      alert(xhr.status +':'+xhr.statusText);
    }
    else{
     array = JSON.parse(xhr.responseText);
     var list= document.createElement('ul');
     document.body.appendChild(list);
     for(var i=0; i < array.length;i++){
       var li = document.createElement('li');
       li.innerHTML = array[i].name;
       list.appendChild(li);
     }
    }
  }
})();
