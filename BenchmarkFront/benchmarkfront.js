let $targetButton = document.getElementById("boutonEnvoyer");
let $targetResult = document.getElementById("result");
let $targetCheckbox = document.getElementsByClassName("validCheckbox");
let $targetInput = document.getElementsByClassName("validinput");
let objectTest = {};
let datatest = "";
var request = new XMLHttpRequest(); /* nouvelle requête */

for(let idStartClass = 0; idStartClass < $targetCheckbox.length; idStartClass++) {
	$targetCheckbox[idStartClass].checked = false;
}

function addInputByTheCheckbox() {
	for(let idClass = 0; idClass < $targetCheckbox.length; idClass++) {
		if($targetCheckbox[idClass].checked) {
			console.log($targetInput[idClass].name+" => "+$targetInput[idClass].value);
			objectTest[$targetInput[idClass].name] = $targetInput[idClass].value;
			
		}
	}
}

$targetButton.addEventListener("click", function fonction_send(e) {
	e.preventDefault();	
	addInputByTheCheckbox();
	datatest = JSON.stringify(objectTest);
	/* préchargement de la récupération de réponse */

	request.onreadystatechange = function() {
		/* convertir la réponse de json vers objet dès que le status de requête est terminé */
	    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
	    	var response = JSON.parse(this.responseText);
	       	
			console.log("Réponse reçue");
			console.log(response); /* voir l'objet réponse en console */
			$targetResult.textContent = response.reponse;
	    }
	};
	console.log(datatest);
	request.open('POST', 'http://localhost/libertymessagepart2/index.php', true);
	// request.open('POST', 'http://localhost/libertymessagepart2/BenchmarkBack/benchmarkback.php', true);
	request.send(datatest); /* envoi requête */
	return false;
});