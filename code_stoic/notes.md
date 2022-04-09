## props are immutable in nature and read only and it's value can't be changed
## props are objects that hold the info to control the components
## problem with props are they are immutable 

## state also contain some info that can be changes over the lifetime of the object
## state are mutable

### learn about this keyword anonymous function and arrow function 
### difference between arrow function and regular function  
### spread operator
### element variable in java script and react


# fragments allow us to group children elements together without adding a new node to the dom

# fragments allow us to group multiple jsx elements together without declaring a parent # <div></div>

# Adjacent JSX elements must be wrapped in an parent enclosing tag. Did you want a JSX fragment <>...</>?
<!-- or you can -->

# so instead of wrapping the adjacent jsx elements inside a parent div and adding the div to DOM we use React.Fragment

<!-- memos in react -->
# a parent component (A) has two child components (B) and (C) so when a (A) components render (B) and (C) child components also render
# which is also helpful cause if we pass component from (a) to (b) and (c) and the values of props in (a) changes it has to be reflected in (B) and (C) 

# but is child components of (A) which are (B) and (C) don't contains any props from (A).
# rerendering them again and again will cause performance issue for this we use memos in react

<!-- React . portaL -->
<!-- react portals allow us to add components in another root element rather than  root element-->