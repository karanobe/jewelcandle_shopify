var config = {
    apiKey: "AIzaSyDJSmnnI3i_o7DPETgPx1pC9vn3tg6gMoA",
    authDomain: "jewelcandle-61e6e.firebaseapp.com",
    databaseURL: "https://jewelcandle-61e6e.firebaseio.com",
    projectId: "jewelcandle-61e6e",
    storageBucket: "jewelcandle-61e6e.appspot.com",
    messagingSenderId: "931033633783"
  };
firebase.initializeApp(config);


var db = firebase.database();
var ref = db.ref('worthOfMyJewel');


ref.on('value', gotData, errData);

function gotData(data) {
	var dataSet = data.val();
	var ids = Object.keys(dataSet);
	for (var i = 0; i < ids.length; i++) {
		var j = ids[i];
		var name = dataSet[j].name;
		var worth = dataSet[j].worth;
		console.log(name,worth)
	}


}


function errData(err) {
	console.log('Error');
	console.log(err);
}