import { defaultArticle } from './../../types/article.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLE_INTERFACE } from 'src/app/types/article.interface';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: string = ''
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    // this.id = //  param id
    // this.route.params.subscribe(data => this.id = data.id)
    this.id = this.route.snapshot.paramMap.get('id')!
    // this.article = this.articlesService.getArticleById(this.id)!
    this.articlesService.fetchUserArticles()
  }

  get article() {
    return this.articlesService.getArticleById(this.id)  || defaultArticle;
  }

}
