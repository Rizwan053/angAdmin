import {
  TablesService
} from './../../../services/tables.service';
import {
  messages
} from './../../../messages';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  messages = messages;
  constructor(private addTable: TablesService) {}

  ngOnInit() {}

  onCreateSubmit(forms: NgForm) {
    this.addTable.postTable(forms.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );

  }

}
