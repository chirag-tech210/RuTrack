# Course Selling Website - Full Stack Project

Welcome to the Course Selling Website! This project is a full-stack development application that allows users to sell and purchase courses. It consists of three main components: the admin client, the server, and the user client.

## Project Structure

The project is organized into three separate directories, each containing the source code and assets for a specific component:

- `admin-client/` - Contains the source code and assets for the admin client.
- `server/` - Contains the server-side code responsible for handling API requests and interacting with the database.
- `user-client/` - Contains the source code and assets for the user client.

## Authentication

This project uses JWT (JSON Web Token) authentication for user authentication. Upon successful login or signup, a JWT token is generated and stored in the local storage of the client's browser. This token is then sent with subsequent API requests to authenticate and authorize the user.

Please note that storing tokens in local storage is not the most secure method, and in a production environment, it is recommended to use more secure alternatives like HTTP-only cookies.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and create your branch from the `main` branch.
2. Make your changes and ensure they follow the project's coding style and conventions.
3. Test your changes to ensure they work as expected.
4. Commit your changes and push them to your fork.
5. Open a pull request to the `main` branch of this repository, describing your changes and improvements.

## Acknowledgments

I would like to acknowledge the full-stack development course and the instructors for providing the knowledge and guidance necessary to build this project.

If you have any questions or need further assistance, please feel free to reach out. Happy coding!
