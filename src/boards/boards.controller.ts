import { Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { log } from 'console';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {} //접근제어자 선언시 암묵적으로 클래스 프로퍼티로 선언됨

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(title: string, description: string): Board {
    log(title, description);
    return this.boardsService.createBoard(title, description);
  }
}
