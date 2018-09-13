var config = {
    apiKey: "AIzaSyDJSmnnI3i_o7DPETgPx1pC9vn3tg6gMoA",
    authDomain: "jewelcandle-61e6e.firebaseapp.com",
    databaseURL: "https://jewelcandle-61e6e.firebaseio.com",
    projectId: "jewelcandle-61e6e",
    storageBucket: "jewelcandle-61e6e.appspot.com",
    messagingSenderId: "931033633783"
  };
firebase.initializeApp(config);
var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

function getData(doc) {
	var docRef = db.collection("worthOfMyJewel").doc(doc);
		docRef.get().then(function(doc) {
		if (doc.exists) {
		    console.log("Document data:", doc.data());
		} else {
		    // doc.data() will be undefined in this case
		    console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
}


getData("Cnxc4Cc6DYJzq3DXvIrW");