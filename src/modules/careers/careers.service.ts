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
      return await this.prisma.career.create({
        data: createCareerDto,
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async findAll() {
    try {
      return await this.prisma.career.findMany({
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.career.findFirst({
        where: {
          id
        },
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: number, updateCareerDto: UpdateCareerDto) {
    try {
      return await this.prisma.career.update({
        where: {
          id
        },
        data: updateCareerDto,
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.career.delete({
        where: {
          id
        },
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }
}
