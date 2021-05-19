let $target_button = document.getElementById("boutonEnvoyer");
let $target_result = document.getElementById("result");
let objettest = {cle: "valeur"}; 
let datatest = "";

var request = new XMLHttpRequest(); /* nouvelle requête */

$target_button.addEventListener("click", function fonction_send(e) {
	e.preventDefault();	
	datatest = JSON.stringify(objettest);
	/* préchargement de la récupération de réponse */

	request.onreadystatechange = function() {
		/* convertir la réponse de json vers objet dès que le status de requête est terminé */
	    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
	    	var response = JSON.parse(this.responseText);
	       	
			console.log("Réponse reçue");
			console.log(response); /* voir l'objet réponse en console */
			$target_result.textContent = response.reponse;
	    }
	};
	console.log(datatest);
	request.open('POST', 'http://localhost/TEST/requeteajax.php', true);
	request.send(datatest); /* envoi requête */
	return false;
});