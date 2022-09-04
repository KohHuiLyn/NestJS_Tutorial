import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // got all the links ie / , /hi etc , post get etc
  providers: [AppService], //extra classes that can be injected into the controllers IE code to get data from DB, to keep controller code short :)
})
export class AppModule {}
