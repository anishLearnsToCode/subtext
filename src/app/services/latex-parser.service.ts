import { Injectable } from '@angular/core';
import {LatexParser} from 'https://github.com/anishLearnsToCode/latex-to-html-parser';

@Injectable({
  providedIn: 'root'
})
export class LatexParserService {

  constructor(private readonly latexParserService) {
    this.latexParserService = LatexParser.getParser();
  }
}
