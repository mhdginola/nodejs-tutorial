# Real Estate Searcher

This app used to search real estate filter by location, type of property, and status. All location, type of property, and status will be shown when each api endpoint has called.

## Flowchart

![Alt text](/design/flowchart.jpg)

## Database Design

![Alt text](/design/database.jpg)

## Getting Started


1. create database in mysql, named 'real_estate'
2. copy '.env.example', and rename to '.env' 
3. run this command to install package and migrating database
   
   ```bash
    # install package
    npm run install
    
    # run database migration
    npx sequelize-cli db:migrate

    # run database seeder
    npx sequelize-cli db:seed:all
   ```
4. run program in development mode
    
    ```bash
    npm run dev
    ```

## API Endpoint

### request

| Method | URL | Description |
| --- | --- | --- |
| `GET` | `/v1/real_estates?locationId=1&statusId=1&typeOfPropertyId=1` | Retrieve real estate data filter by location id `1` , status id `1` , and type of property id `1` |
| `GET` | `/v1/locations` | Retrieve all location |
| `GET` | `/v1/statuses` | Retrieve all status |
| `GET` | `/v1/type_of_properties` | Retrieve all type of property |

### response
GET  `/v1/real_estates?locationId=1&statusId=1&typeOfPropertyId=1`

success
```bash
{
    "data": [
        {
            "id": 1,
            "name": "Rumah 1",
            "price": 123,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z",
            "statusId": 1,
            "locationId": 1,
            "typeOfPropertyId": 1,
            "location": {
                "id": 1,
                "name": "Jakarta Barat",
                "isDefault": 1,
                "createdAt": "2023-02-16T02:01:11.000Z",
                "updatedAt": "2023-02-16T02:01:11.000Z"
            },
            "status": {
                "id": 1,
                "name": "Rent",
                "isDefault": 1,
                "createdAt": "2023-02-16T02:01:11.000Z",
                "updatedAt": "2023-02-16T02:01:11.000Z"
            },
            "type_of_property": {
                "id": 1,
                "name": "House",
                "isDefault": 1,
                "createdAt": "2023-02-16T02:01:11.000Z",
                "updatedAt": "2023-02-16T02:01:11.000Z"
            }
        }
    ]
}
```
##
GET  `/v1/real_estates`

error
```bash
{
    "errors": {
        "statusId": [
            "The statusId field is required."
        ],
        "locationId": [
            "The locationId field is required."
        ],
        "typeOfPropertyId": [
            "The typeOfPropertyId field is required."
        ]
    }
}
```
##
GET  `/v1/locations`

success
```bash
{
    "data": [
        {
            "id": 1,
            "name": "Jakarta Barat",
            "isDefault": 1,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 2,
            "name": "Jakarta Pusat",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 3,
            "name": "Jakarta Selatan",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 4,
            "name": "Jakarta Timur",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 5,
            "name": "Jakarta Utara",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 6,
            "name": "Bekasi",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 7,
            "name": "Tanggerang",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        }
    ]
}
```
##
GET  `/v1/statuses`

success
```bash
{
    "data": [
        {
            "id": 1,
            "name": "Rent",
            "isDefault": 1,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 2,
            "name": "Buy",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 3,
            "name": "Auction",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        }
    ]
}
```
##
GET  `/v1/type_of_properties`

success
```bash
{
    "data": [
        {
            "id": 1,
            "name": "House",
            "isDefault": 1,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 2,
            "name": "Townhouse",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 3,
            "name": "Apartment",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        },
        {
            "id": 4,
            "name": "Room",
            "isDefault": 0,
            "createdAt": "2023-02-16T02:01:11.000Z",
            "updatedAt": "2023-02-16T02:01:11.000Z"
        }
    ]
}
```

## Security Vulnerabilities

If you discover a security vulnerability or error, please send an e-mail to mhdginola@gmail.com . All security vulnerabilities will be promptly addressed.