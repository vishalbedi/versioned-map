import React from 'react';
import {render} from 'react-dom';

import './public/styles/main.scss';
import {Main} from "./app/layouts/Main";

render(
    <Main/>,
    document.getElementById('root')
);