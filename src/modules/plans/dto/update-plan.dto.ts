import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanDto } from './create-plan.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length, Max, MaxLength, Min } from 'class-validator';

export class UpdatePlanDto extends PartialType(CreatePlanDto) {
    @IsNotEmpty({
        message: 'icareer_id_required'
    })
    @IsNumber({}, {
        message: 'icareer_id_number'
    })
    @IsPositive({
        message: 'career_id_positive'
    })
    @Min(0)
    @ApiProperty()
    career_id: number;

    @IsNotEmpty({
        message: 'subject_id_required'
    })
    @IsNumber({}, {
        message: 'subject_id_number'
    })
    @IsPositive({
        message: 'subject_id_positive'
    })
    @Min(0)
    @ApiProperty()
    subject_id: number;

    @ApiProperty()
    fecbaj: Date;

    @IsNotEmpty({
        message: 'area_required'
    })
    @IsString({
        message: 'area_is_not_string'
    })
    @ApiProperty()
    area: string;

    @IsNumber({}, {
        message: 'reqsim_number'
    })
    @IsPositive({
        message: 'reqsim_positive'
    })
    @Min(0)
    @ApiProperty()
    reqsim: number;

    @IsNumber({}, {
        message: 'requi1_number'
    })
    @IsPositive({
        message: 'requi1_positive'
    })
    @Min(0)
    @ApiProperty()
    requi1: number;

    @IsNumber({}, {
        message: 'requi2_number'
    })
    @IsPositive({
        message: 'requi2_positive'
    })
    @Min(0)
    @ApiProperty()
    requi2: number;

    @IsNumber({}, {
        message: 'requi3_number'
    })
    @IsPositive({
        message: 'requi3_positive'
    })
    @Min(0)
    @ApiProperty()
    requi3: number;

    @IsNumber({}, {
        message: 'requi4_number'
    })
    @IsPositive({
        message: 'requi4_positive'
    })
    @Min(0)
    @ApiProperty()
    requi4: number;

    @IsNotEmpty({
        message: 'semestre_required'
    })
    @IsNumber({}, {
        message: 'semestre_number'
    })
    @IsPositive({
        message: 'semestre_positive'
    })
    @Min(1)
    @ApiProperty()
    semestre: number;
}
