import { ApiProperty } from "@nestjs/swagger";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'KenhMuong'})
export class KenhMuong {

    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten', length: '255' })
    ten: string;

    @ApiProperty()
    @Column({ type: 'decimal', name: 'chieu_dai'})
    chieuDai: number;

    @ApiProperty()
    @Column({ type: 'decimal', name: 'chieu_dai_kien_co'})
    chieuDaiKienCo: number;

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.kiengs)
    administrativeUnit: AdministrativeUnit
}
