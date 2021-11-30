import { Injectable } from "@nestjs/common";

@Injectable()
export class TestexService{
    getEx(): string{
        return 'test ex';
    }
}