import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNumber } from "class-validator";
import { HINH_THUC } from "../entities/dien-tich-tuoi-tieu.entity";

export class CreateDienTichTuoiTieuDto {
    @ApiProperty()
    @IsNumber()
    dienTich: number;

    @ApiProperty()
    @IsDate()
    ngayThongKe: Date;

    @ApiProperty()
    @IsEnum(HINH_THUC)
    hinhThuc: HINH_THUC;

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number;

    @ApiProperty()
    @IsNumber()
    cropTypeId: number;
}
