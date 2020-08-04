import { Injectable } from '@angular/core';
// @ts-ignore
const parser = require('https://github.com/anishLearnsToCode/md-to-html-parser');
const converter = new parser.Converter();
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
