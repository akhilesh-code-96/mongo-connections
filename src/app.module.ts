import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrgModule } from './org/org.module';
import { OrgInfoModule } from './org-info/org-info.module';
import { TenantsModule } from './tenants/tenants.module';

@Module({
  imports: [OrgModule, OrgInfoModule, TenantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
