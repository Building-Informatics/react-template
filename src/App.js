import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
const App = () => {
    return (
        <div>
            I am the app
            <Button onClick={()=> {console.log('click')}}>Click me</Button>
        </div>
    )
}

export default App
