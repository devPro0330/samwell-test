# Samwell Test

### Description

The user of this react application will be able to view the video response(s) of job candidates applying for a job at their company.
Also the user can add/update their comments in their responses.

## How to set up and run project

1. Open this project(samwell-test) on your VS code (or some other IDE)

2. Run Server

- `cd server`
- `yarn install` or `npm install`
- `yarn start`

3. Run Client

- `cd client`
- `yarn install` or `npm install`
- Create .env.local file in client folder and add variable like below

  - REACT_APP_BASE_API_URL=http://localhost:3010

- `yarn start`

## How to test

- Run Server
- Locate in the client folder
- `yarn test`

### How did you decide which technologies to use as part of your solution?

- Used useState and useEffect hooks to to manage state and handle side effects within a component.

- Used react Context hook for managing Global state variables.

### Are there any improvements you could make to your submission?

- For now, I used only App.css file to style this app for simple purpose
- So I can use Styled components or other third-party libraries (e.g: MUI, Semantic UI, Tailwind css ...) and separate the styling files in the corresponsing component's folder.
- Can use mock data for testing without running server.

### What would you do differently if you were allocated more time?

- Able to improve the User Interface with more colors and styling
- Able to improve User Experience by adding dropdown options or table with filters to show the candidates.
- Able to improve Error handling and validation parts.

P.S: Of course, we can improve the code structure and performance continuously to make easy for scaling and maintaining.
