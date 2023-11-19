import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum LOAIHINH{
    TUOI = 'Tưới',
    TIEU = 'Tiêu',
    CAHAI = 'Tưới tiêu kết hợp',
}
@Entity({name:'TramBom'})
export class TramBom extends BaseEntityCustom{
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten', length: '255' })
    ten: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string;

    @ApiProperty()
    @Column({ type: 'decimal', name: 'cong_Xuat'})
    congXuat: number;

    @ApiProperty()
    @Column({ type: 'enum', name: 'loai_hinh', enum: LOAIHINH, default: LOAIHINH.CAHAI })
    loaiHinh: LOAIHINH;
    
    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.tramBoms)
    administrativeUnit: AdministrativeUnit
}
