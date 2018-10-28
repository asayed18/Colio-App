# Coligo-App  FrontEnd

## Demo : 
1. [Deployed on heroku](https://coligo-app.herokuapp.com/dashboard)
  
  
  
  


### Description:
single web page application Front End build withh react to be encluded to the back End for building and endycation platform for students to keep them updated with Assignments, quizes and announcements.

### Prerequisite:
 this Ptoject is built on [React-Boilerplate](https://github.com/react-boilerplate) to       increase performance and scalabilty for next updates.
 
 other packages used :
    [react sidebar](https://www.npmjs.com/package/react-sidebar)
    [reactstrap](https://reactstrap.github.io/)
    [google-fonts](https://fonts.google.com/)
    [axios](https://github.com/axios/axios)
    
    
### Details:
1. first the web-app temporarily (till connect to the BE) will redirect the root route "/" to the route "/dashboard"  
2. the App component (Main) will contain the SideBar component as the parent component for other parts, the sidebar is set to be docked for screen-width > 800 px;
3. Custom NavBar with fake data that can be customized with the BE
4. the Main content will be routed for Now to either "/dashboard" or "/announcement"
5. the dashoard component contains 3 children components {Poster, Announcements, Quizes} and the layout is configured using reactstrap without editing these componetns.
6. the {Announcement, Quizes} components template is fetching data from 2 services which act as child components 
    * a real service that call the endpoint http://test.coligolms.com/api/<Entity> to fetch data with defining the Entity for each component {announcement, quiz} 
    * a fake service that fetch the data seprately from a local file FakeData.js and map it to the component
7. the axios package service is used as an http request package and call it through a separated logic file Api.js that conatin the main http functions {getOne(id), getAll(), create(), update(id), patch(id), delete(id) }. the API Url is defined first then defined next the endpoint to be parsed
8. the expand function (All button) in the {Announcement, Quizes} components is handled as a state in the componet that is passed to the child component (the real service) through a props that will be updated in the func. componentWillReceiveProps then fetch first few objects or all the objects from the endpoint.
9. json server is used for development as a test to the real service 
10. most of the developed code in the App directory and the other directories and files are related to the boilerplate.

### Next Updates:
1. updating soeme component with redux and redux-saga
2. Updating NavBar to get data from User profile when connecting to the BE.
3. building other components for the routes in the SideBar {GradeBook, Performance, Courses, etc . . }

## Note:
* most of the components are developed to be reusable even some components are pure components to improve performance.
* Eslint and jest are used as linting and testing for the production deployment
* styling the ptoject with css-module not styled-components to group the styling in css files and to be customized easily
    
   
