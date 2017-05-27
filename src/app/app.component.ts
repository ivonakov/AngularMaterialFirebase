import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      // For other projects use different keys
      apiKey: 'AIzaSyBUYZcc_HKi1TckbZPpSjSkxyFvml3Is0A',
      authDomain: 'angular4materialdesign.firebaseapp.com',
      databaseURL: "https://angular4materialdesign.firebaseio.com",
      projectId: "angular4materialdesign",
      storageBucket: "angular4materialdesign.appspot.com",
      messagingSenderId: "136985605193"
    });

      // start test
      const preUsers = document.getElementById('users')
      const dbRefUsers = firebase.database().ref().child('users');

      dbRefUsers.on('value', snap => console.log(snap.val()));
      // end test  
  }

  


}
