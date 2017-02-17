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
      return xhr.responseText;
    }
  }
  alert(xhr.onreadystatechange());
})();
