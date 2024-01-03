import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardStatus } from './boards.board-status';
import { CreateBoardDto } from './dto/create-board.dto';

export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description, status } = createBoardDto;
    const board = this.create({
      title,
      description,
      status,
    });
    await this.save(board);
    return board;
  }
}
