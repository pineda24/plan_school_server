import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CareersService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createCareerDto: CreateCareerDto) {

    try {
      const {

      } = createCareerDto;

      return await this.prisma.career.create({
        data: createCareerDto,
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  findAll() {
    return `This action returns all careers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} career`;
  }

  update(id: number, updateCareerDto: UpdateCareerDto) {
    return `This action updates a #${id} career`;
  }

  remove(id: number) {
    return `This action removes a #${id} career`;
  }
}
