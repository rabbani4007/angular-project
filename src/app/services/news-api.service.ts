import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private httpClient: HttpClient) {}
  private NEWS_API_KEY = '388ad90ff4a742b3883ed1e08abdb806';

  public get() {
    //return this.httpClient.get(`${this.SERVER_URL}/products`);
  }
  public getNewsCategory() {
    const category = [
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology',
    ];
    return category;
  }

  public getNewsSource() {
    const source = [
      {
        id: 'abc-news',
        name: 'ABC News',
      },
      {
        id: 'abc-news-au',
        name: 'ABC News (AU)',
      },
      {
        id: 'al-jazeera-english',
        name: 'Al Jazeera English',
      },
      {
        id: 'ars-technica',
        name: 'Ars Technica',
      },
    ];
    return source;
  }

  public getNewsArticle() {
    let url = `https://newsapi.org/v2/top-headlines?sources=google-news-in&pageSize=100&apiKey=${this.NEWS_API_KEY}`;
    return this.httpClient.get(url);
  }
  public getNewsArticleBySource(source: string, pageSize: number = 100) {
    let url = `https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=${pageSize}&apiKey=${this.NEWS_API_KEY}`;
    return this.httpClient.get(url);
  }
  public getNewsArticleByCategory(category: string, pageSize: number = 100) {
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=${pageSize}&apiKey=${this.NEWS_API_KEY}`;
    return this.httpClient.get(url);
  }
  public getNewsTopHeadlinesByCountry(country: string, pageSize: number = 100) {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&language=en&pageSize=${pageSize}&apiKey=${this.NEWS_API_KEY}`;
    return this.httpClient.get(url);
  }
}
