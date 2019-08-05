import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const A: number = 1;

    const B: number = 1;

    const C: number = A + B;
    return '' + C;
  }
}
