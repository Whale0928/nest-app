import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../boards.board-status';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  status: BoardStatus;
}
