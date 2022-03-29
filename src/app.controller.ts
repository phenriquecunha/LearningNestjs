import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): string {
    return this.userService.getUserById(id);
  }

  @Post('add')
  createUser(@Body() userDto: UserDto): string {
    return this.userService.createUser(userDto);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() userDto: UserDto): string {
    return this.userService.updateUser(id, userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): string {
    return this.userService.deleteUser(id);
  }
}
