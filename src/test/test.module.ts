import { Module } from "@nestjs/common";
import { TestexModule } from "src/example/ex.module";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";

@Module({
    imports: [TestexModule],
    controllers: [TestController],
    providers: [TestService],
})
export class TestModule {}