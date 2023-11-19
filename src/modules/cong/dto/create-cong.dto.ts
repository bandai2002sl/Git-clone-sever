import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString, isString } from "class-validator";
import { LOAIHINH, LOAIKICHTHUOC } from "../entities/cong.entity";

export class CreateCongDto {
    @ApiProperty()
    @IsString()
    ten: string;

    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsString()
    kichCo: string;

    @ApiProperty()
    @IsEnum(LOAIKICHTHUOC)
    loaiKichThuoc: LOAIKICHTHUOC;

    @ApiProperty()
    @IsEnum(LOAIHINH)
    loaiHinh: LOAIHINH;

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number;
}
