import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TranslationResponse {
  @ApiProperty({
    example: '60507d04a12cc300148e2a64',
    description: 'translation object Id',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    example: 'Header',
    description: 'Widget Name',
  })
  @Expose()
  public widgetName: string;

  @ApiProperty({
    example: '60507d04a12cc300148e2a64',
    description: 'Widget Id',
  })
  @Expose()
  public widgetId: string;

  @ApiProperty({
    example: 'v1.0.0',
    description: 'Widget Version',
  })
  @Expose()
  public widgetVersion: string;

  @ApiProperty({
    example: 'en',
    description: 'Translation Language',
  })
  @Expose()
  public language: string;

  @ApiProperty({
    example: `{
        "headerTopUp" : "Top Up",
        "bodyTopupTextfield" : "Enter the number you want to top up",
        "bodyTopupSelectAmount" : "Select amount",
        "bodyTopupNext" : "Next",
        "bodyTopupAmount" : "Enter amount",
        "bodyTopupInput" : "Enter a valid vodafone number",
        "bodyTopupAmountError" : "Please enter a valid top up amount",
        "bodyTopupButtonsOther" : "Other",
        "confirmText" : "Are you sure you want to top up",
        "confirmAmount" : "Top up amount"
    }`,
    description: 'Translation Language',
  })
  @Expose()
  public data: string;
}
