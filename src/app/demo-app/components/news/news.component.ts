import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { PageEvent } from '@angular/material/paginator';

import { NewsApiService } from '../../../services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  constructor(
    private newsApiService: NewsApiService,
    private mediaObserver: MediaObserver
  ) {}
  newsSources: Array<any> = [];
  newsArticles: Array<any> = [];
  pagedList: Array<any> = [];
  selectedNewsSource: any;
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 20, 30, 50, 100, 200];

  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  mediaSub: any;
  deviceXs: boolean = false;

  ngOnInit(): void {
    this.getNewsArticle();
    this.getNewsSources();
    this.getMediaQueryDetails();
  }
  getNewsArticle() {
    this.newsApiService.getNewsArticle().subscribe((response: any) => {
      this.newsArticles = [...response.articles];
      this.pagedList = this.newsArticles.slice(0, this.pageSize);
      this.length = this.newsArticles.length;
    });
  }
  getNewsArticleByCategory(category: string) {
    this.pagedList = [];
    this.newsApiService
      .getNewsArticleByCategory(category)
      .subscribe((response: any) => {
        this.newsArticles = [...response.articles];
        this.pagedList = this.newsArticles.slice(0, this.pageSize);
        this.length = this.newsArticles.length;
      });
  }

  getNewsTopHeadlinesByCountry(country: string) {
    this.pagedList = [];
    this.newsApiService
      .getNewsTopHeadlinesByCountry(country)
      .subscribe((response: any) => {
        this.newsArticles = [...response.articles];
        this.pagedList = this.newsArticles.slice(0, this.pageSize);
        this.length = this.newsArticles.length;
      });
  }

  getNewsSources() {
    this.newsSources = [...this.newsApiService.getNewsSource()];
  }
  getNewsArticleBySource(source: string) {
    this.pagedList = [];
    this.newsApiService
      .getNewsArticleBySource(source)
      .subscribe((response: any) => {
        this.newsArticles = [...response.articles];
        this.pagedList = this.newsArticles.slice(0, this.pageSize);
        this.length = this.newsArticles.length;
      });
  }

  getMediaQueryDetails() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias == 'xs' ? true : false;
      }
    );
  }

  OnPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.newsArticles.slice(startIndex, endIndex);
  }

  onNewsSourceChange() {
    console.log(this.selectedNewsSource);
    this.getNewsArticleBySource(this.selectedNewsSource);
  }
}
