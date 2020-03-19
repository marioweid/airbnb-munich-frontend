import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
  }

  fileData = {};
  showTable = false;

  getHeaderCells(): string[] {
    return Object.keys(this.fileData[0]);
  }

  getObjectKeyValue(obj: object, key: string): string {
    let ret = obj[key];
    if (ret === undefined || ret == null) {
      ret = '';
    }
    return ret;
  }

  ngOnInit(): void {
    const filename = this.route.snapshot.paramMap.get('filename');
    this.http.get(`http://localhost:3000/files/${filename}`)
      .forEach(response => {
        this.fileData = response;
      })
      .then(() => {
        this.showTable = true;
      });
  }
}
