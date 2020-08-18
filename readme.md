# GBox

Gbox is an application that displays the books you've read/want/own and provides details on each book.

## Set up

This project uses nextjs for the client side, nodejs (with apollo) for the server and mongodb:atlas for the database.

You'll need to install the project dependencies before running the project. Run the following command to do so:

```sh
npm install
```

Before running the server, you need to ensure you have the password for the database set up. The application gets the password from the env variable `DB_PASS`. The recommended approach in this project is to use a `.env` file. Your `.env` file should look something like this:

```
DB_PASS=my_password
```

To run the server, use the following command:

```sh
npm run start:server
```

To run the front end application (in dev mode), use the following command:

```sh
npm run dev
```

When running the server, ensure that the database is running too.

## Development

This project follows the github flow practice. Details of which can be found [here](https://guides.github.com/introduction/flow/).

We use a automated github project board to list out all tasks; to be done, in progress and completed.
