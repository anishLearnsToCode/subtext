import { Injectable } from '@angular/core';
// @ts-ignore
const showdown = require('showdown');
const converter = new showdown.Converter();

@Injectable({
  providedIn: 'root'
})
export class MarkdownParserService {

  constructor() { }

  static parse(message: string): string {
    return converter.makeHtml(message);
  }
}
