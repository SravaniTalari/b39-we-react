React --- framework / library developed by Facebook /Meta
2012 -2013 :
Tech advanement during that time -- mobile revolution(android phones ) , Jio digital life(internet cost down)
mobile phones RAM is less.
Fb want to develop it to low power devices.

Before and After JIO:
Before : intenet cost is high , speed is low..


Web application vs Website

A website becomes webapp when user interacts with it and affect other people experience
 or their own experience.
Eg : you tube  - user interaction affect his own and others experience --> thus webapp

Websites are static , cannot affect others with their interaction --> eg: profile Websites

Eg : Amazon.com --> webapp
webapps --> dynamic and harder to develop.

React is to solve the problem of webapp. 

Features of React :
1.SPA (single page apps/applications) : react popularised SPA --> better user experience

### React 
Rules to creste component:
1.Function should start with  a capital letter
2.It should return at least on JSX element.

Component Eg:

//component declaration
functiom Welcome(){
    let name = "Sravani"
    return(
        <div>
            <h1>
                Hi {name}
            </h1>
        </div>
    );
}


React : event listeners should be written in camelCase

### Hooks
1. REact listen to changes made by hooks
2. hooks are functions
3. It starts with `use`
4. eg : `useState` 
    1. const [state , setState] = useState(IntialValue)
    2. state --> current value
    3. setState --> to update the state value
    4. setState (is like a messanger ) react listens and updates the state & view.
    5. import { useState } from 'react';
    
### conditional styling
### conditional rendering

### Imports & Exports
1. Named - imports & expors - preferred
    1. Multiple exports
2. default - imports & exports
    1. only one export for file
