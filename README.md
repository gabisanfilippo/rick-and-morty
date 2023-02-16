# Rick and Morty Wiki

This is a responsive web application built with ReactJs, Jotai, Styled-components, React-Query, and Typescript. It uses the [Rick and Morty API](https://rickandmortyapi.com/) to display data about characters, locations, and episodes from the popular TV show.

The website has the following pages:
- **Characters page:** displays all characters in card format. Clicking on a card takes you to a page that provides more information about the character, such as their location. The character list page has filters to search by name, filter by species, gender, and status (alive or dead).
- **Character details page:** displays more information about a selected character, such as their location, and episodes they appear in. Clicking on the location takes you to a location details page. Clicking on an episode takes you to the episode details page. 
- **Locations page:** lists locations in card format. Clicking on a card opens the location details, which also lists the residents of that location. The location page has filters to search by name, filter by type, and dimension.
- **Location details page:** displays more information about a selected location, such as its residents and the episodes that take place there. Clicking on a resident (character) takes you to the character details page.
- **Episodes page:** lists episodes in card format. Clicking on a card takes you to the episode details page, which also lists the characters that appear in the selected episode. The episode page can only be searched by name.
- **Episode details page:** displays more information about a selected episode, such as the characters that appear in it. Clicking on a character takes you to the character details page.

## Getting started

To run this project on your local machine, follow these steps:

1. Clone this repository: `git clone https://github.com/<username>/<repository>.git`
2. Navigate to the project directory: `cd rick-and-morty`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000`

## Technologies used

This project was built with the following technologies:

- [ReactJs](https://reactjs.org/)
- [Jotai](https://github.com/pmndrs/jotai)
- [Styled-components](https://styled-components.com/)
- [React-Query](https://react-query.tanstack.com/)
- [Typescript](https://www.typescriptlang.org/)

## Credits

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the data used in this project.
- [React Icons](https://react-icons.github.io/react-icons/) for providing the icons used in this project.
- [Vercel](https://vercel.com/) for hosting the website.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
