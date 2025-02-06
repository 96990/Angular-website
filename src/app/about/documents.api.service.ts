import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentsApiService {
  getItems() {
    return of<DocumentDTO[]>(mock).pipe(delay(500));
  }
}

const mock = [
  {
    id: '1',
    name: 'doc 1',
    issueDaye: '2024-11-11T11:38:49.462Z',
    dueDate: '2024-12-11T11:38:49.462Z',
  },
  {
    id: '2',
    name: 'doc 2',
    issueDaye: '2024-11-11T11:38:49.462Z',
    dueDate: '2024-12-11T11:38:49.462Z',
  },
];

export interface DocumentDTO {
  id: string;
  name: string;
  issueDaye: string;
  dueDate: string;
}
