exports.world = function() {

  console.log('Hello World');
  
  var timeOut = setTimeout(function(str1, str2){
  	console.log("timeout called");
  	//console.log(str1 + " + " + str2);
  }, 2000);

  //clearTimeout(timeOut);

}