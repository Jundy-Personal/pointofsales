import { useState } from 'react';

const Home = (props) => {
  const [message, setMessage] = useState('Hello Worlds!');
  return <h1>{message}</h1>;
};

export default Home;
