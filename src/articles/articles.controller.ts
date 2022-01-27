import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

@Controller('articles')
export class ArticlesController {

    @Get()
    findAllArticles(){
        return `find all`
    }

    @Get(':id')
    findOneArticle(@Param('id') id:number){
        return `finded article ${id}`
    }

    @Post()
    createArticle(@Body() body){
        return body
    }

    @Patch(':id')
    updateArticle(@Param('id') id){
        return `update article ${id}`
    }

    @Delete(':id')
    deleteArticle(@Param('id') id){
        return `deleted article ${id}`
    }

}
