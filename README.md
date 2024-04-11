# Online Portfolio Revamp

This project was created using React, Spring, and Gradle.

Visit https://github.com/users/dylanwraith/projects/1 for project details.

### Running the application locally

To set Environment Variables in MacOS Sonoma 14.4.1 using zsh terminal:
1. Execute `nano ~/.zshrc` in terminal
2. Add `export [ENVIRONMENT_VARIABLE_NAME]=[ENVIRONMENT_VARIABLE_VALUE]` to end of file
   1. For example, `export SERVER_PORT=9000` to set server port to 9000

To launch the React client application, run the following command from the `app` directory:

* `npm start`
  * This should effectively start up the APP at port 3000

To launch the Spring server application at, run the following command from the `online-portfolio-revamp` directory:

* `./gradlew bootRun`
  * This should effectively start up the API at port 9000