import firebase from 'firebase';
import gameStore from './modules/gameStore';


const firebaseConfig = {
	apiKey: 'AIzaSyCBSeq7wRNRQQYZnxZGYt35P-6-yHvwXIg',
	authDomain: 'asdsa-48c2f.firebaseapp.com',
	databaseURL: 'https://asdsa-48c2f.firebaseio.com',
	projectId: 'asdsa-48c2f',
	storageBucket: 'asdsa-48c2f.appspot.com',
	messagingSenderId: '92593551317'
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();
const dataRef = db.ref('website-lena');

const store = {
	state: {
		data: dataRef
	},
	modules: {
		game: gameStore
	}
};

export default store;
