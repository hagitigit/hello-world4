define(function () {
	// Detail View
	const VIEW_OITM_DETAIL = "fb229f12-b37f-4215-8550-df1889e5bf59";
	
	const UUID_BTN_HELLO_WORLD = "uuid_btn_hello_world";
	

	async function loadHelloWorld(oInst) {
		oInst.showMessageBox("Success", "Hello World - Item Loaded", [{
			label: "OK",
			key: "OK"
		}]);

	}

	async function myHelloWorldClicked(oInst) {
		oInst.showMessageBox("Success", "Hello World Button Clicked:)", [{
			label: "OK",
			key: "OK"
		}]);
	}

	// Event names
	const onAfterFormOpen = `OnAfterOpenForm`;
	const onAfterButtonClickBtnHelloWorld = `on${UUID_BTN_HELLO_WORLD}AfterButtonClick`;

	return {
		[onAfterFormOpen]: async function (oInst) {
			await loadHelloWorld(oInst);
		},
		[onAfterButtonClickBtnHelloWorld]: async function (oInst) {
			await myHelloWorldClicked(oInst);
		}
		
	};
});