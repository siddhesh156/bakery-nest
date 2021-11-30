import { Module } from "@nestjs/common";
import { TestController } from "./ex.controller";
import { TestexService } from "./ex.service";

@Module({
    imports: [],
    controllers: [TestController],
    providers: [TestexService],
    exports: [TestexService]
})
export class TestexModule {}