import { LOAIHINH } from "../entities/tram-bom.entity";
export declare class CreateTramBomDto {
    ten: string;
    diaChi: string;
    congXuat: number;
    loaiHinh: LOAIHINH;
    administrativeUnitId: number;
}
