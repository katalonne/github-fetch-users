# Github Fetch Users App

> React app to search Github Users. This app uses the Context API along with the useContext and useReducer hooks for state management.

## Technology stack:
- JavaScript ES6 and ES5 written in [Standard Style](https://standardjs.com/).
- [React.js](https://reactjs.org/)
- [react-app-rewired](https://github.com/timarney/react-app-rewired) Configurable React Create App
- [react-paginate](https://github.com/AdeleD/react-paginate) - Pagination
- [react-router-dom](https://github.com/ReactTraining/react-router)
- [axios](https://github.com/axios/axios) - HTTP client
- [Emotion](https://emotion.sh/) - CSS in JS
- [react-remarkable](https://github.com/acdlite/react-remarkable) For rendering markdown on About page
- CSS3

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites
- `node.js`
- `npm`


### Installing

Install third-party modules.
```
npm install
```
### Running

For Development.
```
npm start

// Runs the app in the development mode.
// Open [http://localhost:3000](http://localhost:3000)
```
For Production.
```
npm run build

// Builds the app for production to the `build` folder.
```


## Detailed use cases covered:
1. A user sees the main page with a search input.

2. A user can search any user on github by typing his/her username in the input field.

3. A user can see the search query in the window query bar.

4. A user can see Loading cards while the data is fetching.

5. A user can see searched users (12 per page).

6. A user can see pagination.

7. When a user changes the page number - the page will automatically scroll smoothly to the top of the page and then request the desired page.

8. A user can see a warning alert in case the request returned a message.

9. A user can view detailed information about a user by clicking on the 'More' Button.

10. A detailed user information can be found on '/user/:username'.

11. A user can return to the previous search by clicking on 'Back To Search' button.

12. A user can see the 'Not Found' page by navigating to a wrong url.


## Authors

* **Catalin Besleaga** 

## Additional notes / Limitations:
- As the github documentation states I have to register my app in order to get a `GITHUB_CLIEND_ID` and `GITHUB_CLIEND_SECRET`.

