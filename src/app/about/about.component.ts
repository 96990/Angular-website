import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DocumentsApiService, DocumentDTO } from './documents.api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cardsObj$!: Observable<any[]>;
  private docService = inject(DocumentsApiService);
  date = new Date();

  ngOnInit(): void {
      this.cardsObj$ = this.docService.getItems().pipe(
        tap((results: DocumentDTO[]) => {
          console.log("tap",results);
        }),
        map((results) => {
          return results.map((result: DocumentDTO) => {
          console.log("map",result);
          // return Object.assign({},result, {dueDate: new Date(result.dueDate)})
          return {...result, dueDate: new Date(result.dueDate)};
          
          })
        })
      );    
  }

  // isOverDue(dueDate: string): boolean{
  //   let today = new Date();
  //   let due = new Date(dueDate);
  //   return due > today;
  // }
}
