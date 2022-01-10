Extended example of understandable Dependency Injection in JavaScript.

# Get started
The application is built with TypeScript, so you need a buid step to view it in the browser.

Do the following:
  ```
  npm install
  npm run dev
  ```

# Frameworks
This application is built with Mithril.js. However, you can easily change to another framework. The only dependencies on Mitrhil are found in the folder *./components* and in the file *./main.ts*. All other files are deliberately kept free of framework dependencies.

For transpiling the code from TypeScript to JavaScript, and for serving the code, Vite.js is used.

# Dependency Injection
The application uses a simple Dependency Injection (DI) approach. All dependencies are set up in *./di/di-setup.ts*, which is called from the application entry point, *./main.ts*.

Using a View-Controller approach, all the logic is placed in controllers. Apart from the chosen framework, the views (or components) only depend on a controller; therefore the Dependency Injection only includes methods to get these controllers. There is no need to expose individual services to the views.

# Demonstrated scenarios

The code demonstrates a couple of common scenarios:

* Singleton dependency - the *UserService* instance is reused throughout the application.

* Non-singleton or transient dependency - a new instance of *PostService* is created each time the dependency is requested.

* Function dependency - the LogService is a function, not an instance.
