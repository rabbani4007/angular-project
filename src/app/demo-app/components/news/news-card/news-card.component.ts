import { Component, OnInit, Input } from '@angular/core';
import { INewsArticles } from '../../../../model/model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent {
  constructor() {}
  @Input()
  article!: any;

  defaultElevation = 2;
  raisedElevation = 16;

  sliceByWord(phrase: string, length: number, skipEllipses?: boolean) {
    if (phrase.length < length) return phrase;
    else {
      let trimmed = phrase.slice(0, length);
      trimmed = trimmed.slice(
        0,
        Math.min(trimmed.length, trimmed.lastIndexOf(' '))
      );
      return skipEllipses ? trimmed : trimmed + '…';
    }
  }
}
