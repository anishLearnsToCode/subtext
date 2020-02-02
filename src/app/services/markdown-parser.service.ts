import { Injectable } from '@angular/core';
// @ts-ignore
const showdown = require('showdown');
const converter = new showdown.Converter();
converter.setOption('parseImgDimensions', true);
converter.setOption('simplifiedAutoLink', true);
converter.setOption('strikethrough', true);
converter.setOption('tables', true);
converter.setFlavor('github');

@Injectable({
  providedIn: 'root'
})
export class MarkdownParserService {

  constructor() { }

  static parse(message: string): string {
    return converter.makeHtml(message);
  }
}
