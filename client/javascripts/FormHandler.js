 function inputAuthorization(value) {
 	if (value && value.length > 0) {
 		return true;
 	} else {
 		return false;
 	}
 }

 function getInputData(event, element) {
 	return event.target[element].value;
 }