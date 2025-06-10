import { Body, Controller , Get, Param, Post} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUserDTO';

@Controller('users')
export class UserController {

  @Get()
  index(): object {
    return {
      message: 'List of users',
      status: 'success',
      data: [
      ],
    };
  }

  @Get(':id')
  show(@Param('id') id: string): object {
    return {
      message: `User with ID ${id}`,
      status: 'success',
      data: {
        id: id,
      }
    };
  }
  @Post()
  create(@Body() createUserDTO: CreateUserDTO): CreateUserDTO {
    return createUserDTO;
  }
}
