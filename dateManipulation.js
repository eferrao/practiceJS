function registerHandlers() {
  var as = document.getElementsByTagName('a');
  for (var i = 0; i < as.length; i++) {
    as[i].onclick = function() {
      console.log(i);
      return false;
    }
  }
}

registerHandlers();