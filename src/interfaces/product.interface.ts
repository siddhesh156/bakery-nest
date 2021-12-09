import { Document } from 'mongoose';

export interface Product extends Document {
    readonly name: string;
    readonly id: number,
    readonly quantity: number,
    readonly intro: string,
    readonly description: string,
}
