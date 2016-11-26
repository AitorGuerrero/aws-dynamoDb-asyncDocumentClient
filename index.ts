import { DynamoDB } from 'aws-sdk';

export class AsyncDocumentClient {

  constructor(private documentClient: DynamoDB.DocumentClient) {}

  scan(opts: any) {
    return new Promise((rs, rj) => this.documentClient.scan(opts, (err: Error, data: any) => {
      if(err) rj(err);
      else rs(data);
    }));
  }
}
