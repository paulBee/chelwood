import React from 'react';
import HelloParagraph from '../components/HelloParagraph';
import {names} from '../data'

const HomePage = () => (
<div>
    {names.map((name) => <HelloParagraph key={name} name={name}/>)}
</div>
);

export default HomePage;
