import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// handles request to domain.com/ [bc its empty] 
@Controller()
export class AppController {
  // allows us to use things in app.service.ts, this AppService green colour is from providers in app.module.ts 
  constructor(private readonly appService: AppService) {}

  // handles request to GET domain.com/
  @Get()
  // overwrite content type that will be sent back
  // @Header('Content-Type', 'text/html')
  getHello(): string {
    // Returns body of the response
    return this.appService.getHello();
  }
}
