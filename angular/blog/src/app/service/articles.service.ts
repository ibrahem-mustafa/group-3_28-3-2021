import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ARTICLE_INTERFACE } from '../types/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}
  baseUrl = 'http://localhost:3000/articles';
  private _articles: ARTICLE_INTERFACE[] = [];

  get articles() {
    return this._articles.slice();
  }

  getArticleById(id: string): ARTICLE_INTERFACE | undefined {
    let article = this._articles.find((article) => article._id == id);

    return article;
  }

  setHeaders() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }

  fetchUserArticles() {
    return this.http
      .get<{ articles: ARTICLE_INTERFACE[] }>(this.baseUrl, this.setHeaders())
      .subscribe(
        (data) => (this._articles = data.articles),
        (err) => console.log(err)
      );
  }

  createArticle(title: string, content: string) {
    this.http
      .post<{ article: ARTICLE_INTERFACE }>(
        this.baseUrl,
        { title, content },
        this.setHeaders()
      )
      .subscribe(
        (data) => {
          this._articles.push(data.article);
          this.router.navigateByUrl('/');
        },
        (err) => console.log(err)
      );
  }

  updateArticle(id: string, title: string, content: string) {
    this.http
      .put<{ article: ARTICLE_INTERFACE }>(
        `${this.baseUrl}/${id}`,
        {
          title,
          content,
        },
        this.setHeaders()
      )
      .subscribe(
        (data) => {
          this.router.navigateByUrl('/')
        },
        (err) => console.log(err)
      );
  }

  deleteArticle(id: string) {
    this.http.delete(`${this.baseUrl}/${id}`, this.setHeaders()).subscribe(
      (_) => {
        const articleIndex: number = this._articles.findIndex(
          (art) => art._id == id
        );
        if (articleIndex == -1) return;
        this._articles.splice(articleIndex, 1);
      },
      (err) => console.log(err)
    );
  }
}
