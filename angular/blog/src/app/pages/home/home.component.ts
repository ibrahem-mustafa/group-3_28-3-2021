import { ArticlesService } from 'src/app/service/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.fetchUserArticles()
  }

  get articles() {
    return this.articlesService.articles
  }

}
