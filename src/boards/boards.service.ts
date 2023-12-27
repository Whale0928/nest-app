import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';
import { v1 as uuid } from 'uuid';
import { BoardStatus } from './boards.BoardStatus';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // Board타입의 배열을 선언하고 초기화
  //list 생성
  private list: string[] = [];

  getAllBoards(): Board[] {
    // :Board[]는 리턴값의 타입을 지정해주는 것 : 반환객체는 Board타입의 배열이라는 뜻
    return this.boards;
  }

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

  //todo: id로 특정 게시물 조회
  //todo: id로 특정 게시물 삭제
  //todo: id로 특정 게시물의 제목과 내용 수정
}
