import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFilesListComponent } from './available-files-list-component';

describe('CsvTableComponent', () => {
  let component: AvailableFilesListComponent;
  let fixture: ComponentFixture<AvailableFilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableFilesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
