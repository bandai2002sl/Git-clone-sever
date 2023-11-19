import { Injectable } from '@nestjs/common';
import { CreateCongDto } from './dto/create-cong.dto';
import { UpdateCongDto } from './dto/update-cong.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cong } from './entities/cong.entity';
import { Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Injectable()
export class CongService {
  constructor(
    @InjectRepository(Cong)
    private congResposity: Repository<Cong>,
    private administrativeUnitService: AdministrativeUnitService
  ) { }
  async create(createCongDto: CreateCongDto) {
    try {
      let { administrativeUnitId, ...Info } = createCongDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
          data: null
        })
      } else {
        let newData = this.congResposity.create({ administrativeUnit, ...Info });
        let cong = await this.congResposity.save(newData);
        return resultData({
          statusCode: 200,
          message: "Thêm mới thành công",
          data: cong
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "Thành công",
      data: await this.congResposity.find({ relations: ['administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.congResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
  }

  async getOne(id: number) {
    try {
      let cong = await this.congResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
      if (!cong) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: cong
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateCongDto: UpdateCongDto) {
    try {
      let cong = await this.findOne(id)
      if (!cong) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
        })
      } else {
        let { administrativeUnitId, ...Info } = updateCongDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        if (!administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại đơn vị hành có id= " + administrativeUnitId,
          })
        } else {
          await this.congResposity.update(id, { ...Info, administrativeUnit });
          return resultData({
            statusCode: 200,
            message: 'Sửa Thành công',
            data: await this.findOne(id)
          })
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  async remove(id: number) {
    try {
      let cong = await this.findOne(id)
      if (!cong) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
        })
      } else {
        await this.congResposity.delete(id)
        return resultData({
          statusCode: 200,
          message: "Xóa thành công",
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}
