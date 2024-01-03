import { Injectable, NotFoundException, Provider } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { DeleteResult } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: BoardRepository,
  ) {}

  getAllBoards(): Promise<Board[]> {
    console.log('getAllBoards');
    return this.boardRepository.find();
  }

  async findBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOneBy({ id: id });
    if (!board) {
      throw new NotFoundException(`존재하지 않는 아이디입니다. :  ${id}`);
    }
    return board;
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.save(createBoardDto);
  }

  async deleteBoardById(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`존재하지 않는 아이디입니다. :  ${id}`);
    }
    console.log('deleteBoardById', result);
  }

  /*


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
