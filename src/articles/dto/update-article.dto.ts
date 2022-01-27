import {PartialType} from "@nestjs/mapped-types";
import {CreateArticleDto} from "./create-article.dto";

//PartialType dziedziczy  walidację, typy i opcjonalne właściwości po CreateArticleDto
export class UpdateArticleDto extends PartialType(CreateArticleDto){

}
