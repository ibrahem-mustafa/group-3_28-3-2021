import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  title: string = '';
  content: string = ''

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  send() {
    this.articlesService.createArticle(this.title, this.content)

  }

}
