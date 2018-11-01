import { messages } from './../../messages';
import { TablesService } from './../../services/tables.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  messages = messages;
  tables;
  public tableWidget: any;
  constructor(private tablesList: TablesService) { }

  ngOnInit() {
    this.tablesList.getTables().subscribe(
      (response) => {
        this.tables = response;
      },
      (error) => console.log(error)
    );
    // this.initDatatable();
  }


  // private initDatatable(): void {
  //   const exampleId: any = $('#tables-Table');
  //   this.tableWidget = exampleId.DataTable({
  //     select: true
  //   });
  // }

}
