import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Global extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }] })
  widgetIds: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  envId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  appId: string;

  @Prop()
  dbName: string;
}

export const GlobalSchema = SchemaFactory.createForClass(Global);
