import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  GetHealthStatus() {
    return { status: 'ok' };
  }
}
