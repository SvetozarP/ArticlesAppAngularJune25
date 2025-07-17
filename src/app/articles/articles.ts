import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleData } from '../data/data';
import { ArticleComponent } from '../article/article';

@Component({
  selector: 'app-articles',
  imports: [ArticleComponent],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
  standalone: true
})
export class ArticlesComponent {

  articles!: Article[];

  constructor() {}

  ngOnInit() {
    this.articles = new ArticleData().getData();
  }

}
