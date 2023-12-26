import { Controller, Get } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  @Get()
  getAllBoards() {
    return 'get all boards';
  }
}
