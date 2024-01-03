import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {} //접근제어자 선언시 암묵적으로 클래스 프로퍼티로 선언됨

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  findBoardById(@Param('id') id: number): Promise<Board> {
    console.log('findBoardById : ', id);
    return this.boardsService.findBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoardById(id);
  }

  /*

  @Get('/ids')
  getAllIds(): string[] {
    return this.boardsService.getAllIds();
  }


  @Post('/update')
  updateBoardById(@Body() updateBoard: UpdateBoardDto): Board {
    return this.boardsService.updateBoardById(updateBoard);
  }

  @Patch('/update/:id')
  updateBoardStatusById(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): boolean {
    return this.boardsService.updateBoardStatusById(id, status);
  } */
}
