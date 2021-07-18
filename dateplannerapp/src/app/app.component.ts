import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void{ }

  constructor(){}

}
