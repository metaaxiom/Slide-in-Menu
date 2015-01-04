//make the menu more mobile-friendly

//hide and unhide functions
function hideMenu(menuID, menuPosition, menuWidth){//need to pass in variable to know which menu to hide
	$("#" + menuID + "-overlay").css("display", "none");
	
	if(menuPosition == "right"){
		$("#" + menuID).animate(
			{right: "-" + menuWidth + "px"},
			500,
			function(){
				$(this).css("display", "none");
			}
		);
	}else{
		$("#" + menuID).animate(
			{left: "-" + menuWidth + "px"},
			500,
			function(){
				$(this).css("display", "none");
			}
		);
	}
}
function unhideMenu(menuID, menuPosition, menuWidth){
	$("#" + menuID + "-overlay").css("display", "block");
	$("#" + menuID).css("display", "block");
	
	if(menuPosition == "right"){
		$("#" + menuID).animate(
			{right: 0},
			500
		);
	}else{
		$("#" + menuID).animate(
			{left: 0},
			500
		);
	}
}

function setMenu(menuID, menuPosition, menuWidth){//menuID is required, menuPosition and menuWidth are optional
	//fetch menu's width
	var getMenuWidth = $("#" + menuID).outerWidth();
	//set menu's default CSS properties
	var menuProperties = {
		menuPosition: "left",
		menuWidth: getMenuWidth,
		menuID: menuID
	};

	//if user defined optional attributes, update menuProperties object
	if(typeof menuPosition !== 'undefined'){
		$("#" + menuProperties.menuID).css(menuProperties.menuPosition, "auto");
		menuProperties.menuPosition = menuPosition;
		$("#" + menuProperties.menuID).css(menuProperties.menuPosition, "-" + menuProperties.menuWidth + "px");
	}
	if(typeof menuWidth !== 'undefined'){
		menuProperties.menuWidth = menuWidth;
		
		$("#" + menuProperties.menuID).css("width", menuProperties.menuWidth + "px");
		$("#" + menuProperties.menuID).css(menuProperties.menuPosition, "-" + menuProperties.menuWidth + "px");
	}
	
	//add class depending on menu position
	if(menuProperties.menuPosition == "right"){
		$("#" + menuProperties.menuID).addClass("feather-right");
	}else{
		$("#" + menuProperties.menuID).addClass("feather-left");
	}
	
	//create overlay
	$("body").append("<div id = \"" + menuProperties.menuID + "-overlay\" class = \"feather-menu-overlay\"></div>");
	
	//when #menuProperties.menuID-open element is clicked...
	$("#" + menuProperties.menuID + "-open").click(function(e){
		e.preventDefault();
		
		unhideMenu(menuProperties.menuID, menuProperties.menuPosition, menuProperties.menuWidth);
	});
	
	//when #menuProperties.menuID-close is clicked...
	$("#" + menuProperties.menuID + "-close").click(function(e){
		e.preventDefault();
		
		hideMenu(menuProperties.menuID, menuProperties.menuPosition, menuProperties.menuWidth);
	});
	
	//when #feather-menu-overlay is clicked...
	$("#" + menuProperties.menuID + "-overlay").click(function(){
		hideMenu(menuProperties.menuID, menuProperties.menuPosition, menuProperties.menuWidth);
	});
}