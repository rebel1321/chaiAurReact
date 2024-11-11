// import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App | chai</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const reactElement =createElement(
//   'a',
//   {href:'https://google.com',target: '_blank'},
//   'click me to visit google'
// )


// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )


createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
