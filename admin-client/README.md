# Course Selling Website - Admin Client

Welcome to the Admin Client of the Course Selling Website! This project is part of a full-stack development course and focuses on the admin functionality of the website. The admin client allows authorized users to create, delete, and publish courses.

## Project Structure

The project consists of three main components: the admin client, the server, and the user client. In this repository, you will find the admin client code. Below is an overview of the project structure:

- `admin-client/` - Contains the source code and assets for the admin client.
- `server/` - Contains the server-side code responsible for handling API requests and interacting with the database.
- `user-client/` - Contains the source code and assets for the user client (not included in this repository).

## Prerequisites

Before running the admin client, ensure that you have the following dependencies installed:

- Node.js (v12 or above)
- npm (v6 or above)

## Getting Started

To get started with the admin client, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the `admin-client` directory.
3. Install the required dependencies by running the following command:

   ```
   npm install
   ```

4. Once the installation is complete, you can start the development server using the command:

   ```
   npm run dev
   ```

   This will launch the admin client on your local machine at `http://localhost:5173`.

## Usage

The admin client provides the following routes and functionalities:

- `/` - Home page of the admin client.
- `/login` - Allows admin users to log in.
- `/signup` - Allows new admin users to create an account.
- `/createcourses` - Enables admin users to create new courses.
- `/courses` - Displays a list of all courses and provides the ability to delete specific courses.

## Authentication

This project uses JWT (JSON Web Token) authentication for user authentication. Upon successful login or signup, a JWT token is generated and stored in the local storage of the client's browser. This token is then sent with subsequent API requests to authenticate and authorize the admin user.

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
