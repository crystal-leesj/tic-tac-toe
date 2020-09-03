This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install` and `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

***

### Basic Functionality

- First player will always be 'O' and the second player will be 'X.'
- Game is won once a player gets a bingo. The winner will be displayed.
- Game can be reset anytime.

###  Notes

- Always been curious to use React Hooks and Typescript so I learned and implemeted on this project.
- Decided not to import any CSS library to improve loading performance. But always happy to work with CSS. :)
- On Table.tsx, <Cell /> components can look redundant but left it for readability. Nested .map() can improve redendancy but that's more fitting if the table need to be dynamic like 5x5 or 10x10.
- Adding unit tests can bring to higher standard.
