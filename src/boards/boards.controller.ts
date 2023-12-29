import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardStatus } from './boards.BoardStatus';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) { } //접근제어자 선언시 암묵적으로 클래스 프로퍼티로 선언됨

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Get('/ids')
  getAllIds(): string[] {
    return this.boardsService.getAllIds();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  findBoardById(id: string): Board {
    return this.boardsService.findBoardById(id);
  }

  @Get('/:id')
  deleteBoardById(id: string): Board {
    return this.boardsService.deleteBoardById(id);
  }

  @Post('/:id')
  updateBoardById(@Body() updateBoard: UpdateBoardDto): Board {
    return this.boardsService.updateBoardById(updateBoard);
  }

  @Post('/:id/status')
  updateBoardStatusById(id: string, status: BoardStatus): boolean {
    return this.boardsService.updateBoardStatusById(id, status);
  }
}
