import { Controller, Get } from "@nestjs/common";
import { TestexService } from "src/example/ex.service";
import { TestService } from "./test.service";

@Controller('testc')
export class TestController{
    constructor (private readonly testService: TestService, private readonly testexService: TestexService){}
    
    @Get('/test')
    test(): string{
        return this.testService.getTest();
    }

    @Get('/testkj')
    test2(): string{
        return this.testexService.getEx();
    }


}