import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TenantsService } from '../../tenants/tenants.service';

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
  constructor(private readonly tenantsService: TenantsService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const contactNumber =
      request.headers['x-tenant-contact'] || request.query.contactNumber;

    // Find or establish the database connection based on contact number
    const tenantConnection =
      await this.tenantsService.getTenantConnection(contactNumber);

    if (!tenantConnection) {
      throw new Error('Tenant database connection could not be established');
    }

    request.tenantConnection = tenantConnection; // Store connection on the request object
    return next.handle();
  }
}
