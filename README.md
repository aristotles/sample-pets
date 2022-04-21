# Pet Selecter React App
#### By Sam Kratsas

###### Written in JavaScript
######  Run command:
~~~
npm i
npm start
~~~


## Tasks
Gather data from "https://dev.wagmo.io/api/1.0/breeds/" and allow the user to interact with it in a react application by selecting the pet species then the pet type. 

## Approach
Created a very structured approach. Every function, component, enum is its own file. Props and states are passed between them to update the ui and perform functions. A variety of open source ui components were used as building blocks to create the desired interface.

## Hurdles
Two hurdles faced were, trouble getting the cat image from Figma. This lead to the realization that the images were seen in the quote funnel, used the urls from the images in the react app. Also the Figma design seemed to be made for a mobile application. While I could have changed the react view to a mobile device, I made my components suited for a standard webpage.

## Next Steps
I believe good software is subjective and can never be perfect, constant updating and improvements are always needed. So when it was time to stop this project there were still many things I could have added, including:
- Unit testing, integration testing, and cypress component testing.
- The user's breed appears at the bottom of the screen once selected/entered.
- further refactoring of the code structure, and removing unneeded code from create-react-app.