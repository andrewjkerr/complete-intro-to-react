import React from 'react';
import { render } from ('react-dom');
import MyTitle from './MyTitle';

const ce = React.createElement;

const MyFirstComponent = function() {
    return ce(
        'div',
        null,
        ce(MyTitle, { color: 'rebeccapurple', title: 'House of Cards' }),
        ce(MyTitle, { color: 'peru', title: 'Orange is the New Black' }),
        ce(MyTitle, { color: 'burlywood', title: 'Stranger Things' }),
    );
};

render(ce(MyFirstComponent), document.getElementById('app'));
