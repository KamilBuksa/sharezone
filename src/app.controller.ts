import { Request as ExpressRequest } from "express";
import { Controller, Post, UseGuards, Get,Request } from "@nestjs/common";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

@Controller("")
export class AppController {
  constructor(private readonly authService: AuthService) {
  }



  @Post("auth/register")
  async register(@Request() req:ExpressRequest) {
    return this.authService.register(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req:ExpressRequest) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req:ExpressRequest) {
    return req.user;
  }


}
