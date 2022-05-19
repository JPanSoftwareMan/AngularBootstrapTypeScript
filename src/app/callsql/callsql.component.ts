import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-callsql',
  templateUrl: './callsql.component.html',
  styleUrls: ['./callsql.component.scss']
})
export class CallsqlComponent implements OnInit {

  public Pipelines: Pipeline[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let baseUrl1 = "https://localhost:44379/api/" 

    http.get<Pipeline[]>(baseUrl1 + 'Pipelines').subscribe(result => {
      this.Pipelines = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}


interface Pipeline {
  id: number;
  name: string;
  licenseNumber: string;
  lineId: string;
  length: number;
  operator: string;
}