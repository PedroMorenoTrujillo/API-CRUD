import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models';
import { TableDataHeader } from 'src/app/models/tableDataHeader';
import { ObservableHeroService } from 'src/app/services/observableHeroService';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss'],
})
export class TabledataComponent implements OnInit {
  tableData!: MatTableDataSource<any>;
  displayedHeader: string[] = Object.values(TableDataHeader);
  displayedColumns: string[] = Object.keys(TableDataHeader);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private observableHeroService: ObservableHeroService) {
  }

  ngOnInit(): void {
    this.observableHeroService.heroList.subscribe(
      (heroList) => {
        this.tableData = new MatTableDataSource<Hero>(heroList)
        this.tableData.paginator = this.paginator;
        this.tableData.sort = this.sort;
      })
  }

}
