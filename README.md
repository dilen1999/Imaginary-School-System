# Imaginary school system for managing student attendance.

The Imaginary School System is a web application designed to manage student attendance efficiently. It features secure JWT authentication for user login and logout functionality. Upon login, users are directed to a dashboard where they can track and record student attendance for classes. Role-based access control ensures appropriate permissions for teachers, administrators, and staff. The system provides reporting capabilities to analyze attendance trends and support decision-making for student success.

## Technologies Used

- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT (JSON Web Tokens)

## Prerequisites

- Java 17 or higher installed on your machine
- Maven installed on your machine

## Getting Started

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/dilen1999/Imaginary-School-System.git
Navigate to the Project Directory
cd Imaginary-School-System
Set Up the Project
Open the project in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).
Maven will automatically download the required dependencies.
Configuration
By default, the application uses in-memory storage for users. Ensure the application.properties file contains the following configurations:
# Disable data source auto-configuration if no database is needed
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration

# JWT Configuration
app.jwt.secret=your_jwt_secret_key
app.jwt.expiration=3600

# Server Configuration
server.port=8080

# Logging Configuration
logging.level.org.springframework=DEBUG
logging.level.root=DEBUG

Running the Application
You can run the application using the Maven command:
mvn spring-boot:run

##Accessing the Endpoints
Once the application is running, you can access the endpoints using a REST client like Postman or any HTTP client library.
API Endpoints
Login: POST /api/auth/login
Request Body:
{
  "username": "admin",
  "password": "password"
}
Response
{
  "jwt": "your_jwt_token"
}

##Testing Credentials
Use the following credentials to test the login endpoint:
Username: admin
Password: password


## Screenshots

User name : username
Password : password

![Login Page](docs/loginpage.png)
![Home Page](docs/homepage.png)
![Logout Page](docs/homelogout.png)
```
