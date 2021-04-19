import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  editMode: boolean = false;
  id: string = '';
  title: string = '';
  content: string = ''

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.id = id;
      this.editMode = true;
      const article = this.articlesService.getArticleById(id);
      if (!article) {
        return
      }
      this.title = article.title;
      this.content = article.content;
    }
  }

  send() {
    this.articlesService.createArticle(this.title, this.content)

  }

  update() {
    this.articlesService.updateArticle(this.id, this.title, this.content)
  }

}
