import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ArticlesService} from "./articles.service";

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {
    }

    @Get()
    findAllArticles() {
        return this.articlesService.findAll()
    }

    @Get(':id')
    findOneArticle(@Param('id') id: string) {
        return this.articlesService.findOne("" + id)
    }

    @Post()
    createArticle(@Body() body) {
        return this.articlesService.create(body)
    }

    @Patch(':id')
    updateArticle(@Param('id') id: string, @Body() body) {
        return this.articlesService.update(id, body)
    }

    @Delete(':id')
    deleteArticle(@Param('id') id) {
        return this.articlesService.remove(id)
    }

}
