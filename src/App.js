import { useState } from 'react';
import Container from './components/Container';
import Head from './components/Head';
import Button from './components/Button';
import Item from './components/item';

import image1 from './assets/images/person1.jpg';
import image2 from './assets/images/person2.jpg';
import image3 from './assets/images/person3.jpg';
import image4 from './assets/images/person4.jpg';
import image5 from './assets/images/person5.jpg';

const items = [
  {
    id:1,
    imageUrl:image1,
    name: 'Bertie Yates',
    age: '29 years'
  },
  {
    id:2,
    imageUrl: image2,
    name: 'Hester Hogan',
    age: '32 years'
  },
  {
    id:3,
    imageUrl: image3,
    name: 'Larry Little',
    age: '36 years'
  },
  {
    id:4,
    imageUrl: image4,
    name: 'Sean Walsh',
    age: '34 years'
  },
  {
    id:5,
    imageUrl: image5,
    name: 'Lola Gardner',
    age: '29 years'
  }
]

function App() {

  const [isThereBirthday, setIsThereBirthday] = useState(true);
  const [numOfBirthday, setNumOfBirthday] = useState(5);

  const allItems = items.map(item => {
    return <Item 
    key = {item.id}
    imageUrl={item.imageUrl}
    name={item.name}
    age = {item.age}
    />
  });

  const clearAll = () => {
    setIsThereBirthday(false);
    setNumOfBirthday(0);
  }
  return (
      <Container>
          <Head numOfBirthday={numOfBirthday}/>
          {isThereBirthday && allItems}
          <Button onClickHandler={clearAll}/>   
      </Container>
  );
}

export default App;
