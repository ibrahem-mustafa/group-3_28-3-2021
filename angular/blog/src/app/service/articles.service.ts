import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ARTICLE_INTERFACE } from '../types/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient, private userService: UserService, private router: Router) {}
  baseUrl = 'http://localhost:3000/articles';
  private _articles: ARTICLE_INTERFACE[] = [];


  get articles() {
    return this._articles.slice()
  }

  setHeaders() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }

  fetchUserArticles() {
    this.http
      .get<{ articles: ARTICLE_INTERFACE[]}>(this.baseUrl, this.setHeaders())
      .subscribe(
        (data) => this._articles = data.articles,
        (err) => console.log(err)
      );
  }

  createArticle(title: string, content: string) {
    this.http
      .post<{article: ARTICLE_INTERFACE}>(this.baseUrl, { title, content }, this.setHeaders())
      .subscribe(
        (data) => {
          this._articles.push(data.article);
          this.router.navigateByUrl('/')
        },
        (err) => console.log(err)
      );
  }
}
