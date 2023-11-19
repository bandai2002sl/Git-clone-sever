import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateKenhMuongDto {
    @ApiProperty()
    @IsString()
    ten: string;

    @ApiProperty()
    @IsNumber()
    chieuDai: number;

    @ApiProperty()
    @IsNumber()
    chieuDaiKienCo: number;

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number;
}
