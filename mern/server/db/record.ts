import {
  Field,
  PrimaryKey,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

@TigrisCollection("records")
export class Record {
  @PrimaryKey(TigrisDataTypes.BYTE_STRING, { order: 1, autoGenerate: true })
  _id?: string;

  @Field({ elements: TigrisDataTypes.STRING })
  $k?: string[];

  @Field()
  name!: string;

  @Field()
  position!: string;

  @Field()
  level!: string;
}
