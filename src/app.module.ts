import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SubjectsModule } from './modules/subjects/subjects.module';
import { CareersModule } from './modules/careers/careers.module';
import { PlansModule } from './modules/plans/plans.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, }), PrismaModule, SubjectsModule, CareersModule, PlansModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
