	function myFunction() {
		var words = document.getElementById("welcome");
		words.innerHTML = "Thanks for visiting!";
	}
	
	
	function sayHi() {
		alert("Hello! This is an alert.");
	}
	
	
	
	
	function myFnction(){
		var image = document.getElementById("dog"); 
			if (image.src.match("happy")){
				image.src="angry.gif";
				image.alt="Angry Dog";
			}
			else{
				image.src="happy.gif";
				image.alt="Happy Dog";
			}
	}
	
	
	function myFinction() {
		var image = document.getElementById("chocolate");		
			if(image.src.match("coffee")){
				image.src="chocolate.gif";
				image.alt="Chocolate";
			}
			else{
				image.src="coffee.gif";
				image.alt="Coffee";
			}
	}
	
	
	<button id="btn" onclick="myFinction()">Change me!</button><br>
		<img id="chocolate" src="coffee.gif" alt="Coffee">
	