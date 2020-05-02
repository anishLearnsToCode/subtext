import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  private static message: string;

  constructor() { }

  static set(message: string): void {
    this.message = message;
  }

  static getMessage(): string {
    return this.message;
  }
}
