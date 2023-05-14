import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(config:ConfigService){
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL')
                }
            }
        });
        this.$use(async (params, next) => {
            // Check incoming query type
            if (['client', 'driver', 'vehicle', 'user', 'payment', 'device', 'device_vehicle'].includes(params.model)) {
              if (params.action == 'delete') {
                // Delete queries
                // Change action to an update
                params.action = 'update'
                params.args['data'] = { deleted_at: new Date() }
              }else if (params.action == 'deleteMany') {
                // Delete many queries
                params.action = 'updateMany'
                if (params.args.data != undefined) {
                  params.args.data['deleted_at'] = new Date()
                } else {
                  params.args['data'] = { deleted_at: new Date() }
                }
              }else if (params.action == 'create') {
                // Create queries
                // Add creation date
                params.args.data['created_at'] = new Date();
              }else if (params.action == 'update') {
                // Update queries
                // Add edition date
                params.args.data['edited_at'] = new Date();
              }
            }
            return next(params)
        })
    }
}
