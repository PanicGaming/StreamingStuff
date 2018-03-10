$.fn.toggleClick = function() {
    var methods = arguments;    // Store the passed arguments for future reference
    var count = methods.length; // Cache the number of methods 

    // Use return this to maintain jQuery chainability
    // For each element you bind to
    return this.each(function(i, item){
        // Create a local counter for that element
        var index = 0;

        // Bind a click handler to that element
        $(item).on('click', function() {
            // That when called will apply the 'index'th method to that element
            // the index % count means that we constrain our iterator between 0
            // and (count-1)
            return methods[index++ % count].apply(this, arguments);
        });
    });
};

function reseed() {
	var qSeed = "?seed=" + Math.ceil(999999 * Math.random());
	window.location = qSeed;
	return false;
}

 function bingo() {
	function getparam( name ) {
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( window.location.href );
		if(results == null)
			 return "";
		return results[1];
	}


	function shuffleSquares(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array
	}

	function pickX(array, x) {
		let items = [].concat(array);
		let ret = []
		let len = 0;
		for(let i = 0; i < x; i++) {
			len = items.length;
			idx = Math.random() * len
			ret.push(items[idx])
			items.splice(idx, 1);
		}
		return ret;
	}

	function pickXNoDupes(srcarray, checkarray, x) {
		let items = [].concat(srcarray);
		let ret = [].concat(checkarray);
		let len = 0;
		let i = 0
		
		while(i < x) {
			len = items.length;
			idx = Math.floor(Math.random() * len);
			let item = items[idx];
			//No Dupes
			if(-1 == ($.inArray(item, ret)))
			{
				ret.push(item);
				items.splice(idx, 1);
				i++;
			}
		}
		return ret;
	}

	$("#bingoboard tr td").toggleClick(
		function () { $(this).addClass("onsquare"); },
		function () { $(this).addClass("brokensquare").removeClass("onsquare"); },
		function () { $(this).removeClass("brokensquare"); }
	);
	
	$("#row1").hover(function() { $(".row1").addClass("hover"); }, function() {	$(".row1").removeClass("hover"); });
	$("#row2").hover(function() { $(".row2").addClass("hover"); }, function() {	$(".row2").removeClass("hover"); });
	$("#row3").hover(function() { $(".row3").addClass("hover"); }, function() {	$(".row3").removeClass("hover"); });
	$("#row4").hover(function() { $(".row4").addClass("hover"); }, function() {	$(".row4").removeClass("hover"); });
	$("#row5").hover(function() { $(".row5").addClass("hover"); }, function() {	$(".row5").removeClass("hover"); });

	$("#col1").hover(function() { $(".col1").addClass("hover"); }, function() {	$(".col1").removeClass("hover"); });
	$("#col2").hover(function() { $(".col2").addClass("hover"); }, function() {	$(".col2").removeClass("hover"); });
	$("#col3").hover(function() { $(".col3").addClass("hover"); }, function() {	$(".col3").removeClass("hover"); });
	$("#col4").hover(function() { $(".col4").addClass("hover"); }, function() {	$(".col4").removeClass("hover"); });
	$("#col5").hover(function() { $(".col5").addClass("hover"); }, function() {	$(".col5").removeClass("hover"); });

	$("#bslash").hover(function() { $(".bslash").addClass("hover"); }, function() {	$(".bslash").removeClass("hover"); });
	$("#fslash").hover(function() { $(".fslash").addClass("hover"); }, function() {	$(".fslash").removeClass("hover"); });
	
	let weaponsquares = [
	"Have Masmune",
	"Have Katana",
	"Have XCalbur",
	"Have Vorpal Sword",
	"Have Power Staff",
	"Have Catclaw",
	"Have Thor's Hammer",
	"Have Defense",
	 ]
	 
	 let armorsquares = [
	 "Have White Shirt",
	 "Have Black Shirt",
	 "Have Opal Armor",
	 "Have Dragon Armor",
	 "Have Opal Bracelet",
	 "Have Ice Armor",
	 "Have Flame Armor",
	 ]
	 
	 let otherarmorsquares = [
	 "Have Zeus Gauntlets",
	 "Have Power Gauntlet",
	 "Have Opal Gauntlet",
	 "No Prorings",
	 "No Ribbons",
	 "Have 3 Ribbons",
	 "Have Opal Helmet",
	 "Have Heal Helmet",
	 "Have 2 Procapes",
	 "Have Aegis Shield",
	 "Have Opal Shield"
	]

	let classessquares = [
	"No class change",
	"No Fighters",
	"No White Mages",
	"No Red Mages",
	"No Black Mages",
	"No Black Belts",
	"No Thieves",
	"Have one Thief",
	"Have two Thieves",
	"Have one Red Mage",
	"Have two Red Mages",
	"Have one Black Belt",
	"Have two Black Betls",
	"Have one Fighter",
	"Have two Fighters",
	"Have one White Mage",
	"Have two White Mages",
	"Have one Black Mage",
	"Have two Black Mages",
	"All Casters",
	"No Casters"
	]

	let magicsquares = [
	"No Level 1 White Magic",
	"No Level 2 White Magic",
	"No Level 3 White Magic",
	"No Level 4 White Magic",
	"No Level 5 White Magic",
	"No Level 6 White Magic",
	"No Level 7 White Magic",
	"No Level 8 White Magic",
	"No Level 1 Black Magic",
	"No Level 2 Black Magic",
	"No Level 3 Black Magic",
	"No Level 4 Black Magic",
	"No Level 5 Black Magic",
	"No Level 6 Black Magic",
	"No Level 7 Black Magic",
	"No Level 8 Black Magic",
	"No FADE",
	"No NUKE",
	"No EXIT",
	"No WARP",
	"No CURE Spells",
	"No HEAL Spells",
	"No FIRE Spells",
	"No LIT Spells",
	"No ICE SPells"
	]

	let monstersquares = [
	"See WARMECH",
	"Save TYROs",
	"Kill TYROs",
	"Save AGAMAs",
	"Kill each RuRu",
	"Kill each Elemental",
	"Always Trigger Traps",
	"Kill Garland",
	"Kill Astos",
	"Kill Wizards"
	]

	let questitems = [
	"Get KEY",
	"Get OXYALE",
	"Get RUBY",
	"Get ROD",
	"Get BOTTLE",
	"Get SLAB",
	"Get CHIME"
	]

	let dungeonsquares = [
	"Get all Marsh Cave chests",
	"Get all Earth Cave chests",
	"Get all Gurgu Volcano Chests",
	"Get all Ice Cavern Chests",
	"Get all Water Shrine Chests",
	"Get all Mirage Tower Chests",
	"Get all Floating Castle Chests",
	"Get all Key chests",
	"Light Fire Orb last",
	"Light Air Orb last",
	"Light Water Orb Last",
	"Never enter Castle of Ordeals"
	]

	let enemyskillsquares = [
	"See FROST",
	"See HEAT",
	"See GLANCE",
	"See GAZE"  ,
	"See FLASH" ,
	"See SCORCH",
	"See CRACK",
	"See SQUINT",
	"See STARE" ,
	"See GLARE",
	"See BLIZZARD",
	"See BLAZE",
	"See INFERNO",
	"See CREMATE",
	"See POISON",
	"See TRANCE",
	"See POISON",
	"See THUNDER",
	"See TOXIC",
	"See SNORTING",
	"See NUCLEAR",
	"See INK",
	"See STINGER",
	"See DAZZLE",
	"See SWIRL",
	"See TORNADO",
	"See FROST & CREMATE",
	"See POISON AND TOXIC",
	"See CRACK & SCORCH",
	"See NUCLEAR & TRANCE",
	"See SQUINT or GLARE",
	"See Ink or SWIRL"
	]
	 
	let allequipmentsquares = weaponsquares.concat(
		armorsquares.concat(otherarmorsquares)
	);

	let allvalues = [].concat(allequipmentsquares).concat(classessquares).concat(magicsquares).concat(monstersquares).concat(questitems).concat(dungeonsquares).concat(enemyskillsquares)
	let allsquares  = []
	let count=0;
	let SEED = getparam('seed');
	if(SEED == "") reseed();

	Math.seedrandom(SEED); 
	var MAX_SEED = 999999; //1 million cards
	var results = $("#results");
	results.append ("<p>FF Randomizer Bingo Seed: " + SEED + "</p>");

	
	//6 equipments no matter what
	allsquares.concat(pickX(allequipmentsquares, 6));

	//1 Magic square no matter what
	allsquares.concat(pickX(magicsquares,1));

	//3 Enemy Skill Squares
	allsquares.concat(pickX(enemyskillsquares, 3));

	//2  dungeon or monster squares
	allsquares.concat(pickX([].concat(dungeonsquares).concat(monstersquares), 2));	
	let shuffled = shuffleSquares(pickXNoDupes(allvalues, allsquares, 25-allsquares.length));
/*	let row1 = shuffled.slice(0,5);
	let row2 = shuffled.slice(5,5);
	let row3 = shuffled.slice(10,5);
	let row4 = shuffled.slice(15,5);
	let row5 = shuffled.slice(20,5);


	let bingoboard = [row1, row2, row3, row4, row5];*/
	let i = 0;
	for (i=0; i<25; i++) {
		let slot = "#slot" + (i+1)
		$(slot).append("<p>"+shuffled[i]+"</p>");
	}
}


//$.ready(function () { bingo()});
$(window).on('load', function() { bingo()});

