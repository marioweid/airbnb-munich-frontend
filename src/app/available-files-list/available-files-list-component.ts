import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-csv-table',
  templateUrl: './available-files-list-component.html',
  styleUrls: ['./available-files-list-component.scss']
})
export class AvailableFilesListComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  tables: string[] = [];
  geoMaps: string[] = [];


  fetchAvailableData() {
    this.http.get<string[]>('http://localhost:3000/files')
      .forEach(row => {
        this.tables = row.filter(item => item.endsWith('csv'));
        this.geoMaps = row.filter(item => item.endsWith('geojson'));
      })
      .then(() => {
        console.log('finished reading');
      });
  }

  requestFile(selected: string) {
    // send request to backend
    // if response -> change route to table-view
    this.router.navigate([`/files/${selected}`, {}]);
    console.log(`changing route to : ${selected}`);
  }


  ngOnInit(): void {
    this.fetchAvailableData();
  }

}
