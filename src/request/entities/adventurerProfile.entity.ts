import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Speciality } from './../../adventurers/entities/speciality.entity';

@Schema()
export class AdventurerProfile extends Document {
    @ApiProperty({
        required: true
    })
    @Prop()
    speciality: Speciality;

    @ApiProperty({
        required: true
    })
    @Prop()
    experience: number;
}

export const AdventurerProfileSchema = SchemaFactory.createForClass(AdventurerProfile);
