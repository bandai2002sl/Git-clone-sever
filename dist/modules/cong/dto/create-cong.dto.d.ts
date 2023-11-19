import { LOAIHINH, LOAIKICHTHUOC } from "../entities/cong.entity";
export declare class CreateCongDto {
    ten: string;
    diaChi: string;
    kichCo: string;
    loaiKichThuoc: LOAIKICHTHUOC;
    loaiHinh: LOAIHINH;
    administrativeUnitId: number;
}
