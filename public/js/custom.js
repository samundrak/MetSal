function msgBox(msg, title) {
	if (!title) tile = "Information";

	BootstrapDialog.show({
		message: msg,
		title: title
	});

}