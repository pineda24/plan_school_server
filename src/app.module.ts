import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SubjectsModule } from './modules/subjects/subjects.module';
import { CareersModule } from './modules/careers/careers.module';
import { PlansModule } from './modules/plans/plans.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, }), SubjectsModule, CareersModule, PlansModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
