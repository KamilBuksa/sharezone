import {Injectable, NotFoundException} from '@nestjs/common';
import {Article} from "./entities/article.entity";

@Injectable()
export class ArticlesService {
    private articles: Article[] = [{
        title: 'First Article',
        lead: 'First Lead',
        body: 'First body',
        id: 1,
        createdAt: new Date()
    }]

    findAll() {
        return this.articles;
    }

    findOne(id: string) {
        const article = this.articles.find(item => item.id === +id);

        if (!article) {
            throw new NotFoundException(`Coffee #${id} not found`)
        }

        return article
    }

    create(createArticleDto: any) {
        this.articles.push(createArticleDto);
    }

    update(id: string, updateCoffeeDto: any) {
        const existingArticle = this.findOne(id);
        if (existingArticle) {
            // update the existing entity
        }
    }

    remove(id: string) {
        const articleIndex = this.articles.findIndex(item => item.id === +id);
        if (articleIndex >= 0) {
            this.articles.splice(articleIndex, 1);
        }
    }
}

