import React from 'react';
import { withLocale } from '../context/locale.context';

function HomeComponent({ lang }) {
    return (
        <div className="Home">{lang.handle('hello')} {lang.handle('bye')}</div>
    );
}

export const Home = withLocale(HomeComponent);