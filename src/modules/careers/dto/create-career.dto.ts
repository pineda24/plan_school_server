import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length, Max, MaxLength, Min } from 'class-validator';

export class CreateCareerDto {

    // @IsNotEmpty({
    //     message: 'id_required'
    // })
    // @IsNumber({}, {
    //     message: 'id_number'
    // })
    // @IsPositive({
    //     message: 'id_positive'
    // })
    // @ApiProperty()
    // id: number;

    @IsNotEmpty({
        message: 'name_required'
    })
    @IsString({
        message: 'name_is_not_string'
    })
    @ApiProperty()
    name: string;

    @ApiProperty()
    fecbaj: Date;
}
