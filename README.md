# Rest API

An API written in TypeScript with [Express.js](https://expressjs.com/) and [MySQL](https://www.mysql.com/).

## Table of Content

- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Run Server](#run-server)
- [Usage](#usage)
- [License](#license)

## Prerequisite

> Make sure you have [Node.js](https://nodejs.org/en) and [MySQL](https://www.mysql.com/) installed on your system.

1. Create `rest_api` database

```
CREATE DATABASE rest_api;
```

2. Create `user` table

```
CREATE TABLE rest_api.users (
    id INT AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(256) UNIQUE NOT NULL,
    PRIMARY KEY(id)
);
```

## Installation

1. Clone the repo

```
git clone https://github.com/Kunalpatil22/rest-api.git
```

2. Change into the directory

```
cd rest-api
```

3. Install dependencies

```
npm install
```

4. Setup environment variables in `.env` file in the root of the folder

```
PORT=<your_desired_port_number>
DB_CONNECTION_URL=<url_to_connect_to_mysql_server>
```

## Run Server

- **Development**

```
npm run dev
```

- **Production**

```
npm run build && npm start
```

## Usage

### Endpoints

#### GET /api/users

Description: Retrieve all users

Request example:

```
GET /api/users
```

Response Example:

```
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@doe.com"
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane@doe.com"
    }
]
```

#### GET /api/users/:id

Description: Retrieve a specific user

Parameters:

- `id` - `id` of the specific user

Request example:

```
GET /api/users/1
```

Response Example:

```
{
    "id": 1,
    "name": "John Doe",
    "email": "john@doe.com"
}
```

#### POST /api/users

Description: Insert a new user

Parameters:

- `id` - `id` of the specific user

Content-Type: application/json

Request body `json`:

```
{
    "name: <name_of_user>,
    "email": <email_of_user>
}
```

Request example:

```
POST /api/users
Content-Type: application/json
Body: {
    "name: "Mary Smith",
    "email": "mary@smith.com"
}
```

Response Example:

```
{
    message: "User inserted successfully.",
    user: {
        "id": 3,
        "name": "Mary Smith",
        "email": "mary@smith.com"
    }
}

```

### PUT /api/users/:id

Description: Update a user

Parameters:

- `id` - `id` of the specific user

Content-Type: application/json

Request body `json`:

```
{
    "name: <name_of_user>,
    "email": <email_of_user>
}
```

Request example:

```
PUT /api/users/3
Content-Type: application/json
Body: {
    "name: "Mary Johnson",
    "email": "mary@johnson.com"
}
```

Response Example:

```
{
    message: "User updated successfully.",
    "user": {
        "id": 3,
        "name": "Mary Johnson",
        "email": "mary@johnson.com"
    }
}
```

### DELETE /api/users/:id

Description: Delete a user

Parameters:

- `id` - `id` of the specific user

Request example:

```
DELETE /api/users/3
```

Response Example:

```
{
    "message": "User deleted successfully."
    "id": 3
}
```

# License

This project is licensed under the [MIT License](LICENSE.md).
