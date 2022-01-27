import {Controller, Get} from '@nestjs/common';

@Controller('articles')
export class ArticlesController {

    @Get()
    addArticle(){
        return 'article added'
    }
}
