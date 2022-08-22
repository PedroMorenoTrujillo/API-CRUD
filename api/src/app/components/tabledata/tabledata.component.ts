import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models';
import { TableDataHeader } from 'src/app/models/tableDataHeader';
import { ObservableHeroService } from 'src/app/services/observableHeroService';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { formatDataForCharts } from './tools';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss'],
})
export class TabledataComponent implements OnInit {
  tableData: Hero[] = [];
  displayedHeader: string[] = Object.values(TableDataHeader);
  displayedColumns: string[] = Object.keys(TableDataHeader);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedFilters: string[] = [];
  tableDataFiltered!: MatTableDataSource<any>;
  secondRowData: any= {}

  constructor(
    private observableHeroService: ObservableHeroService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.observableHeroService.heroList.subscribe((heroList) => {
      if(heroList.length > 0){
        this.tableData = heroList;
        this.tableDataFiltered = new MatTableDataSource<Hero>(heroList);
          this.secondRowData = formatDataForCharts(heroList)
        this.tableDataFiltered.paginator = this.paginator;
        this.tableDataFiltered.sort = this.sort;
      }

    });
  }


  changeFilters(selectedFilersEmmited: string[]) {
    this.selectedFilters = selectedFilersEmmited;
    if (this.selectedFilters.length === 0) {
      this.tableDataFiltered.data = this.tableData;
    } else {
      this.filterDataForTable();
    }
  }

  filterDataForTable() {
    let filteredData: any[] = [];
    let avoidDuplicatedHeroes: string[] = [];
    this.tableData.forEach((hero: Hero) => {
      this.selectedFilters.forEach((item) => {
        if (
          hero.nameLabel.trim().toLowerCase().includes(item) &&
          !avoidDuplicatedHeroes.includes(hero.nameLabel.trim().toLowerCase())
        ) {
          avoidDuplicatedHeroes.push(hero.nameLabel.trim().toLowerCase());
          filteredData.push(hero);
        }
      });
    });
    this.tableDataFiltered.data = filteredData;
  }

  selectHero(hero: Hero) {
    this.dialog.open(ModalComponent, {
      data: hero,
    });
  }

  createHero() {
    this.dialog.open(ModalComponent, { data: null });
  }
}
