# Kombat Explorer

React app that reads from [kombat-explorer-api](https://github.com/WillRussell/kombat-explorer-api). A UI layer to browse/search upcoming events, view events on an interactive world map, and inspect fight cards. 

[View live demo](https://d20l0qhspqmr91.cloudfront.net)

## Screens

### Events Calendar

<img width="500" alt="Kombat Explorer 1" src="https://github.com/user-attachments/assets/efc3584d-b47c-450f-beb1-96cc9979e386" />

### Map View

<img width="500" alt="Kombat Explorer 2" src="https://github.com/user-attachments/assets/aa01f5cf-5626-455c-bf84-25c31124fb7c" />

### Event Details

<img width="500" alt="Kombat Explorer 3" src="https://github.com/user-attachments/assets/4b662810-0f14-473e-ade0-bcc857a8f449" />

## Features

- Browse upcoming boxing and MMA events with dates, venues, and locations
- Search the event calendar by event data
- Explore geocoded events on an interactive Leaflet map
- View announced fight cards, fighter records, and lineup status
- Switch between formatted content and the underlying JSON data
- Light/dark theme switching with the preference saved in local storage
- Navigate responsive loading, error, and empty states

## Tech stack

- React 16 and Create React App
- React Router 5
- Material-UI 4
- Leaflet and React Leaflet
- Axios
- Sass
- Moment.js and Lodash
- AWS S3 and CloudFront

## Available scripts

| Command | Description |
| --- | --- |
| `yarn start` | Run the app in development mode |
| `yarn test` | Run the test suite in watch mode |
| `yarn build` | Create an optimized production build |
| `yarn lint` | Check JavaScript and JSX with ESLint |
| `yarn lint --fix` | Fix automatically repairable lint issues |
| `yarn deploy` | Sync the existing `build/` directory to the configured S3 bucket |

## Routes

| Route | Description |
| --- | --- |
| `/` | Searchable upcoming-event calendar |
| `/map` | Interactive map of event locations |
| `/fights/:id` | Fight-card details for an event |

## Deployment

The production build is hosted with AWS S3 and CloudFront. The deploy script expects an authenticated AWS CLI and an existing production build:

```bash
yarn build
yarn deploy
```
