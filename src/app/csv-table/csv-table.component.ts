import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Injectable()
@Component({
  selector: 'app-csv-table',
  templateUrl: './csv-table.component.html',
  styleUrls: ['./csv-table.component.scss']
})
export class CsvTableComponent implements OnInit {
  // availableTablesControl = new FormControl();
  constructor(private http: HttpClient) {
  }

  options: string[] = [];


  fetchAvailableData() {
    this.http.get<string[]>('http://localhost:3000/files')
      .forEach(row => this.options = row)
      .then(() => console.log('finished reading'));

  }


  ngOnInit(): void {
  }

}
