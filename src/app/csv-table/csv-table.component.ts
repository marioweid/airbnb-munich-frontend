import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-csv-table',
  templateUrl: './csv-table.component.html',
  styleUrls: ['./csv-table.component.scss']
})
export class CsvTableComponent implements OnInit {
  availableTablesControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
