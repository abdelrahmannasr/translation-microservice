import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Translation extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Prop()
  widgetName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  widgetId: string;

  @Prop()
  widgetVersion: string;

  @Prop()
  language: string;

  @Prop()
  data: string;

  @Prop({ type: mongoose.Schema.Types.Date })
  createdAt: string;

  @Prop({ type: mongoose.Schema.Types.Date })
  updatedAt: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
