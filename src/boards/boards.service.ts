import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  getAllBoards(): Board {
    return null;
  }

  /*

  getAllIds(): string[] {
    return this.boards.map((board) => board.id);
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto; //비구조화 할당
    const board: Board = {
      id: uuid(),
      title, //title: title, 과 같은 의미 필드와 변수명 같을때 생략 가능
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  findBoardById(id: string): Board {
    const board = this.boards.find((board) => board.id == id);
    if (!board) {
      throw new NotFoundException(`Can't find Board id ${id}`);
    }
    return board;
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
