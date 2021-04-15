import { Component, Input, OnInit } from '@angular/core';
import { ARTICLE_INTERFACE } from 'src/app/types/article.interface';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() article: ARTICLE_INTERFACE | any
  constructor() { }

  ngOnInit(): void {
  }

}
