import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TablesService {
  getTablesURL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getTables() {
    return this.http.get(this.getTablesURL);
  }

  postTable(post: any[]) {
    // let res;
    return this.http.post(this.getTablesURL , post );
    // .pipe(map((response) => response));
    // .subscribe(
    //   (response) => {
    //     res = response;
    //   },
    //   (error) => console.log(error)
    // );
      // console.log(res);

    // return res;
  }

}
