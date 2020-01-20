// app.component.ts

import { Component, OnInit } from "@angular/core";
@Component({
  selector: "mytestform",  // this selector is always in index.html
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"] 
})
export class AppComponent implements OnInit {
  title="Test FormData"
  constructor() {}
  ngOnInit() {}
  onClickSubmit(formData) {
    alert("Your Email is : " + formData.email+" password is "+formData.pwd);
  }
  }
