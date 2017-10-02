import React from 'react';
import { render } from 'react-dom';

import MyTitle from './MyTitle';

const MyFirstComponent = () => (
    <div>
        <MyTitle title="Props are great!" color="rebeccapurple" />
        <MyTitle title="Use props everywhere!" color="mediumaquamarine" />
        <MyTitle title="Props are the best!" color="peru" />
    </div>
);

render(<MyFirstComponent />, document.getElementById('app'));
