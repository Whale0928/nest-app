import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './boards.board-status';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: BoardRepository,
  ) {}

  getAllBoards(): Promise<Board>[] {
    return null;
  }

  async findBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne(id);
    if (!board) {
      throw new NotFoundException(`존재하지 않는 아이디입니다. :  ${id}`);
    }
    return board;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.save(createBoardDto);
  }

  /*

  getAllIds(): string[] {
    return this.boards.map((board) => board.id);
  }


  deleteBoardById(id: string): Board {
    const board = this.findBoardById(id);
    if (!board) {
      throw new NotFoundException(`Can't find Board id ${id}`);
    }
    this.boards = this.boards.filter((board) => board.id != id);
    return board;
  }

  updateBoardById(updateDto: UpdateBoardDto): Board {
    const board = this.findBoardById(updateDto.id);
    board.title = updateDto.title;
    board.description = updateDto.description;
    return board;
  }

  updateBoardStatusById(id: string, status: BoardStatus): boolean {
    const board = this.findBoardById(id);
    board.status = status;
    return true;
  } */
}
