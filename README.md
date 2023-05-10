
# Kombat Explorer Client

A front-end React app that reads from [kombat-explorer-api](https://github.com/facebook/create-react-app). This is a ui to explore upcoming boxing & mma events.

#### [Live Demo](https://d20l0qhspqmr91.cloudfront.net)

<img width="400" alt="Screen Shot 2023-05-10 at 1 05 45 PM" src="https://github.com/WillRussell/kombat-explorer-client/assets/8751625/ec2c4582-2373-4455-a847-525925a2d880">


## Tools used
React, React-Router, Material-UI, AWS S3 + Cloudfront


## Notes

This project is a warehouse for front-end tricks and patterns I commonly use:

 - Fetching api data & managing state with React Hooks 
 - Handle theme switching / dark mode with `UseContext()`. And put the user's preference in LocalStorage
 - Loading spinners & conditional rendering
 - Searchbar list filtering
 - A toggle feature to view raw json on the ui:
  <img width="400" alt="Screen Shot 2023-05-10 at 1 06 20 PM" src="https://github.com/WillRussell/kombat-explorer-client/assets/8751625/e9877524-8c10-4782-8a91-0fa1d7f3cf1c">


## Running the app locally + available scripts

 `yarn start`
 
`yarn test`
  
`yarn build`
  
`yarn deploy`
  
`yarn lint --fix`

