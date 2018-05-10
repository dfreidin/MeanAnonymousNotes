import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  notes: any;
  new_note: any;
  errors = null;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.new_note = {note: ""};
    this.getNotes();
  }
  getNotes() {
    this._httpService.getNotes().subscribe(data => {
      if(data["message"] == "Success") {
        this.notes = data["data"];
        this.errors = null;
      }
      else {
        this.errors = data["error"];
      }
    });
  }
  createNote() {
    this._httpService.createNote(this.new_note).subscribe(data => {
      if(data["message"] == "Success") {
        this.new_note = {note: ""};
        this.errors = null;
        this.getNotes();
      }
      else {
        this.errors = data["error"];
      }
    })
  }
}
