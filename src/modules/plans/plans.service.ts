import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlansService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createPlanDto: CreatePlanDto) {
    try {
      return await this.prisma.plan.create({
        data: createPlanDto,
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async findAll() {
    try {
      return await this.prisma.plan.findMany({
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.plan.findFirst({
        where: {
          id
        }
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    try {
      return await this.prisma.plan.update({
        where: {
          id
        },
        data: updatePlanDto
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.plan.delete({
        where: {
          id
        }
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e);
    }
  }
}
