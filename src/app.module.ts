import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';


//modules
import { IncomeTypesModule } from './income-types/income-types.module';
import { JobPositionsModule } from './job-positions/job-positions.module';

@Module({
  imports: [IncomeTypesModule, JobPositionsModule, MongooseModule.forRoot('mongodb://localhost/paysheet')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
