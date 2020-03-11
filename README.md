# Server https://dblim.herokuapp.com/

| Request name   | Method | Endpoing                        |
| -------------- | ------ | --------------------------------|
| Messages list  | GET    | api/messages/list/{pageNumber}  |
| Single message | GET    | api/messages/single/{message_id}|
| Create message | POST   | api/messages                    |

### Messages list

    pageNumber(required) - existing list page

Status code : `200 OK`
Response body:

```json
[
  {
    "_id": "string",
    "email": "string",
    "text": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
]
```

### Single message

    message_id(required) - existing message id

Status code : `200 OK`
Respons body:

```json
{
  "_id": "string",
  "email": "string",
  "text": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Create message

Request body:

```json
{
  "email": "string",
  "text": "string"
}
```

Status code : `200 OK`
Request body:

```json
{
  "_id": "string",
  "email": "string",
  "text": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```
