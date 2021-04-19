import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/service/articles.service';
import { ARTICLE_INTERFACE } from 'src/app/types/article.interface';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article: ARTICLE_INTERFACE | any;
  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  navToArticle() {
    this.router.navigate(['articles', this.article._id]);
  }

  deleteArticle() {
    const id = this.article._id;
    this.articlesService.deleteArticle(id);
  }

  navUpdateArticle() {
    this.router.navigate(['form', this.article._id])
  };
}
