import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './Components/Image';
import Name from './Components/Name';
import Description from './Components/Description';
import Price from './Components/Price'


function App() {
  const firstName = "Nouha"
  return (
    <div className="App">
      <h1>Checkpoint JSX</h1>
      {/* Cart part */}
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Description />
            <Price />
          </Card.Text>
          <Button variant="primary">Click me</Button>
        </Card.Body>
      </Card>
      {/* message */}
      {firstName ?
        <>
          <p>{`Hello ${firstName}!`}</p>
          <img style={{ width: '300px' }} src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1705589723/1000_F_300536833_5umNuZK9uPZzEOOzHAEO4imVZu5AD3T9_fmmkwf.jpg" alt="feedback" />
        </>
        :  <p>{`Hello There!`}</p>
      }
    </div>
  );
}

export default App;
