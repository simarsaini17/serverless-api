import handler  from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main=handler(async(event,context) => {
    const params={
        TableName: process.env.tableName,
        Key:{
            UserId:'123',
            NoteId:event.pathParameters.id,

        },
    };

    console.log(params);
    const result=await dynamoDb.get(params);
    if(!result.Item){
        console.log("Item not found");
    }

    return result.Item;
});