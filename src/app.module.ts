import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { CareersModule } from './modules/careers/careers.module';
import { PlansModule } from './modules/plans/plans.module';

@Module({
  imports: [SubjectsModule, CareersModule, PlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
