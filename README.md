# FenixGroupHomeTask

- The automation task is given by Fenix group company for the QA interview process
- The task include a UI test

# In this project:
- The test framework is design for:  "https://celltelligence.com/"
- Language:                           javascript
- Framework:                          cypress
- Design pattern:                     POM

# setup the project:
- npm install

- npm install cypress@6.0.1 --save-dev

# open cypress dashborad:
- npx cypress open

# run all test:
- npx cypress run

# run specific test file:
- npx cypress run --spec ./cypress/integration/Tests/SignUp.spec.js

# file structure:

├── cypress  
            ├── fixtures                    # holds optional JSON data 
            ├── integration                 # holds the actual test files
            ├── plugins                     # allow you to customize how tests are loaded
            ├── screenshots                 # holds the tests screenshots  
            ├── support                     # file runs before all tests and is a great place to write or load additional custom commands
            ├── videos                      # holds the tests records 
            ├── cypress.json                # cypress configuration file 
            ├── .gitignore                  # ignore the files to commit


