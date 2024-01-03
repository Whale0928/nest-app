import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../boards.board-status';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata);
    value = value.toUpperCase();
    if (!this.validStatus(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }

    return value;
  }

  validStatus(status: any) {
    const idx = this.StatusOptions.indexOf(status);
    return idx !== -1;
  }
}
