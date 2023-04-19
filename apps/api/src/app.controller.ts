import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  sayHello() {
    return { message: 'Hello World!' };
  }
}
