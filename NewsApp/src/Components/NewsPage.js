import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../Pages/Home';

export const NewsPage = StackNavigator({
    News: { screen: Home }
});
