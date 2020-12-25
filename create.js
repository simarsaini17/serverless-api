import * as uuid from 'uuid';
import dynamoDb from './libs/dynamodb-lib';
import handler from './libs/handler-lib';

export const main=handler(async(event,context) => {

    const data=JSON.parse(event.body);

    const params={
        TableName:process.env.tableName,
        Item:{
            UserId:event.requestContext.identity.cognitoIdentityId,
            NoteId:uuid.v1(),
            content:data.content,
            attachment:data.attachment,
            createdAt:Date.now(),
        }
    };
await dynamoDb.put(params);
return params.Item;
});