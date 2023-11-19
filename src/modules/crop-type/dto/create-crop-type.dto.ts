import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCropTypeDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsString()
    image: string;

    @ApiProperty()
    @IsString()
    tamNgung: string;

    @ApiProperty()
    @IsString()
    icon: string;
}
