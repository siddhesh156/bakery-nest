import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest World!';
  }
  getText(): string {
    return 'Nest!';
  }
  
}
