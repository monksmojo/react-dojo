# React Notes

---

1. a java script library to build user interface
2. a client side java script library
3. we create reactive components // comparative programming. [we don't define step by step codes]
modern reactive useful component
4. react help us in code reusability by creating a component and using that component again.
5. helps in building single page application.
6. it can be used to control the parts of the html pages or the entire web page.
7. lean and focused components based ui library

**Q- what are single page application**

> single page applications or spa are applications where server send data to client side in the form of json or xml and front end frameworks take control to build the ui

  index.js is the first loaded file
  which is imported in index.html

  In the index.js file we import the 'react'
  import React from 'react'
  and we also import react virtual dom
  import ReactDOM from 'react-dom'

  the React give us a function
  ReactDOM.render(<App />, document.getElementById("root"));
  which takes the component we want to render as the first argument.
  and the element from the actual dom of index,html where we want to render the component

  the index.js uses jsx.

  html in javascript file return function in react is called jsx 

  ```js
  export default <FunctionName> 
  import <FunctionName> from ./RelativePath
  ```
  to make it available to other components

>note: function name of the component should start with uppercase character



**Q- what is routing in react**
---

**read about the following **
1. App.test.js automation testing in react
2. reportWebVital.js
3. <React.StrictMode>
4. array destructuring
5. function sre first class object
6. && operator return second element if true


# files that are needed to be removed are --:
1. app.test.js
2. logo.svg
3. App.css 
4. setupTest.js
5. reportWebVital.js
6. strict mode in index.js
7. all the unused imports


### arrow function in js ()=>{}

### anonymous inline function in function(){}

# onClick={deleteHandler} ***we don't execute deleteHandler() cause it will execute on handler***

### states and useState() in React

# state is used maintains different functionality of the web page making it dynamic;

# React provides us with useState() which is a react hook

# useState help us to register the state of the web page and render different components based on which state is active

# useState() returns array with two elements
# the first element at the zero index is the current state 
# the second element at the first index is the function

# we can pass methods to the props to the child components which can act as the pointer to the function and can trigger the parent function using 
1. {props.<function_pointer_props_name>}
2. function <function_name>(){
  props.<function_pointer_props_name>();
}
<button onClick={function_name}>

# routing 
> react router dom
1. routing watches the url and changes the content on the single page application based on the url
2. we need to add routing tool in our app to change the components based on the url
3. pages directory is the directory which contains components which are pages 


4. ```javascript
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```
<BrowserRouter> wraps the url around our app

### we create route in our app component which is wrapped inside  our routes
### the route component takes two arguments props path="/" element={<component />}
```javascript
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" element={<AllMeetUp />} />
        <Route path="/new-meetups" element={<NewMeetUp />} />
        <Route path="/fav-meetups" element={<FavMeetUp />} />
      </Routes>
    </div>
  );
}

```
## now to link this route to a button we use link component from react-router-dom

```javascript
<Link to="/"> All Meetups </Link>
```


### {props.children}
### help us pass the whole jsx as the props

### how to export and import named components
#### to export
```javascript
export function FavoritesContextProvider(props) {}
```
#### to import we use {} [curly brackets]
```javascript
import {FavoritesContextProvider} from path
```



