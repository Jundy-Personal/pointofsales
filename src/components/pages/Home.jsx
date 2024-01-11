import { useState } from 'react';
import {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
  WarningButton,
} from '@/components/atoms/index';

const Home = (props) => {
  const [message, setMessage] = useState('Hello Worlds!');
  return (
    <div>
      <h1>{message}</h1>
      <PrimaryButton size="small">Submit</PrimaryButton>
      <SecondaryButton>Close</SecondaryButton>
      <DangerButton size="small">Delete</DangerButton>
      <WarningButton>warning</WarningButton>
    </div>
  );
};

export default Home;
