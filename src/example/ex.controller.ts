import { Controller, Get } from "@nestjs/common";
import { TestexService } from "./ex.service";

@Controller('testex')
export class TestController{
    constructor (private readonly testService: TestexService){}

    @Get('/testex')
    test(): string{
        return this.testService.getEx();
    }
}