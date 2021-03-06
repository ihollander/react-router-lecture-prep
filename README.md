# React Router

## SWBAT

- [ ] Create a multi-page SPA
- [ ] Explain the advantages of using React Router
- [ ] Utilize the most common `react-router` components to build a SPA: `BrowserRouter`, `Link`, `NavLink`, `Route`, `Switch`
- [ ] Use `push`, `Redirect`, and `history` to navigate pages
- [ ] Create dynamic routes and use `params`
- [ ] Make the distinction between `state` being one _Single Source of Truth_ and `react-router` being another _Single Source of Truth_

---

## Lecture Notes
- What does REST mean?

- Why do we care about routes?

---

## Installation & Setup

- react-router-dom (the version of React Router for web apps)
- `npm install --save react-router-dom`
- `import { BrowserRouter } from 'react-router-dom'`
- Or alias as Router: `import { BrowserRouter as Router } from 'react-router-dom'`

---

## Server-side vs. Client-side Routing

### Server-side

- Static routing
- Any change in URL triggers request/response cycle
  - Request for new page from server
  - Serve entirely new document to user
  - Causes page refresh
  - e.g. Rails routes
- Pros
  - Only request for data that's needed
  - Search engine optimization
- Cons
  - Full page refresh
  - Slower & less seamless feel

### Client-side (React Router)

- Single Page Application (SPA)
- Dynamic routing
- Changes in URL do not trigger a request to server. Instead, it is handled internally by JavaScript and changes the state of the app to render new views
- Pros
  - Faster routing
  - Smoother feeling
- Cons
  - Loading all frontend data at once, so initial load time may be increased
  - Search engine optimization

---

## HTML5 History API

You can manipulate the URL in your browser with these:

```javascript
window.history.pushState({}, null, "page")
window.history.back()
window.history.forward()
```

Combine that with `if/else` logic and tracking history and you get `react-router`.

---

## Different Types of React Routers

*We'll be using BrowserRouter for this lecture*

### BrowserRouter

BrowserRouter create classic URLs:
```
https://someurl.com/someroute
```

- More popular and preferred
- Uses HTML5 History API to keep track of router history and syncs your UI with the current browser URL path (`window.location`)
- Relatively recent and not supported by legacy browsers
- Use if you have a dynamic server that handles dynamic URLs

### HashRouter

HashRouter creates hashed URLs:
```
http://someurl.com/#/someroute
```

- Similar to BrowserRouter but only keeps track of the hash part of the url `window.location.hash` (the part after the `#` is not sent to the server)
- Supported by legacy browsers
- Consider using if you have a server that only serves up static files

---

## Understanding React Router

### Router (BrowserRouter / HashRouter)

- Wraps our entire application
- Listens for changes in the route/URL & makes requested information accessible

### Link / NavLink

- Replacement for anchor links (`<a>` tags) and enables navigation
- While anchors reload the whole page, `Link` only reloads the parts of the UI that match the browser's location path
- Changes the URL we see in the browser
- Must have a 'to' prop

```javascript
<Link to='/'>Some Component</Link>
```
- `NavLink` is a subclass of `Link` that adds styling to the element

### Route

- Conditionally render something (e.g. a component) only when there is a match with the location's path/route
- Routing with `component` vs `render`

```javascript
<Route path="/" component={ SomeComponent } />
```

```javascript
<Route path="/" render={ SomeComponent }/>
```

```javascript
<Route path="/" render={ (props) =>
  <SomeComponent
    {...props}
    someProp='someProp'
  />
}/>
```

### Switch

- Renders first child route that matches browser location

### Redirect

- Redirects to another location

```javascript
<Redirect to="/some-path" />
```

- Basic auth routing

```js
function ProtectedRoute(props) {
  if (props.isSignedIn) {
    return <Route path={props.path} component={props.component} />;
  } else {
    return <Redirect to="/" />;
  }
}
// more advanced version: https://reacttraining.com/react-router/web/example/auth-workflow
```

### More on Routes

- Route props (`match`, `history`, `location`)
- Nested routes and route params (`/path/:param`)
- Query params (`/path?key1=value1&key2=value2`)

```js
import queryString from 'query-string'

...
const search = this.props.location.search;
const queryValues = queryString.parse(search);
```

### React Router Browser History

- `history` object provides simple API to manage browser history

```javascript
history.push("/some-path")
<Link to='/some-path' />
```

```javascript
history.replace("/some-path")
<Redirect to="/some-path" />
```
---

## Resources

- [HTML5 History API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [React Router Github](https://github.com/ReactTraining/react-router)
- [React Router Website](https://reacttraining.com/react-router/)
- [Nested routes with React Router v4](https://tylermcginnis.com/react-router-nested-routes/)
- [`react-router`: difference between `component` and `render` props](https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render)
- [Notes on deploying with client-side routing](https://facebook.github.io/create-react-app/docs/deployment#serving-apps-with-client-side-routing)