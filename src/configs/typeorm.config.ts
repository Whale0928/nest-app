import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'app_board',
  entities: [__dirname + '/../**/*.entity.{js,ts}'], //.entity로 끈나는 js,ts 파일을 모두 찾아서 엔티티로 등록
  synchronize: true,
};
