import {
    ArgumentMetadata,
    BadRequestException,
    PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../boards.BoardStatus';

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

    transform(value: any, metadata: ArgumentMetadata) {
        console.log('value', value);
        console.log('metadata', metadata);

        value = value.toUpperCase();

        if (!this.valiedStatus(value)) {
            throw new BadRequestException(`${value} is an invalid status`);
        }

        return value;
    }

    valiedStatus(status: any) {
        const idx = this.StatusOptions.indexOf(status);
        return idx !== -1;
    }
}
