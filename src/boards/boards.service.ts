import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';
import { v1 as uuid } from 'uuid';
import { BoardStatus } from './boards.BoardStatus';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    // :Board[]는 리턴값의 타입을 지정해주는 것 : 반환객체는 Board타입의 배열이라는 뜻
    return this.boards;
  }

  createBoard(title: string, description: string): Board {
    const board: Board = {
      id: uuid(),
      title, //title: title, 과 같은 의미 필드와 변수명 같을때 생략 가능
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}
