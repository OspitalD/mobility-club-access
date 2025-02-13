	function checkEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
		function validate() {
			var email = document.getElementById("email").value;
		
			if (checkEmail(email)) {
				alert('Adresse e-mail valide');
			} else {
				alert('Adresse e-mail non valide');
			}
			return false;
		}
//NNNEE

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate() {
    var email = document.getElementById("email").value;
    if (checkEmail(email)) {
            $.ajax({
                url:'https://api.apispreadsheets.com/data/14837/',
                type:'post',
                data:$("#myForm").serializeArray(),
                alert('Adresse e-mail valide');
            });
        } else {
            alert('Adresse e-mail non valide');
        }
        return false;
		}