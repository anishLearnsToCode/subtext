import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  currentlySelected: string;
  constructor() { }
}
