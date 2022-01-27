import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ArticlesService} from "./articles.service";
import {CreateArticleDto} from "./dto/create-article.dto";
import {UpdateArticleDto} from "./dto/update-article.dto";

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {
    }

    @Get()
    findAllArticles() {
        return this.articlesService.findAll()
    }

    @Get(':id')
    findOneArticle(@Param('id') id: number) /* Param domyślnie jest stringiem, transform:true w Pipe umożliwia otypowanie go na number */ {
        return this.articlesService.findOne("" + id)
    }

    @Post()
    createArticle(@Body() createArticleDto: CreateArticleDto) {
        console.log(createArticleDto instanceof CreateArticleDto)
        return this.articlesService.create(createArticleDto)
    }

    @Patch(':id')
    updateArticle(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
        return this.articlesService.update(id, updateArticleDto)
    }

    @Delete(':id')
    deleteArticle(@Param('id') id) {
        return this.articlesService.remove(id)
    }

}
