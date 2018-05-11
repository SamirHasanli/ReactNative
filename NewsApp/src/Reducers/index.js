import { combineReducers } from 'redux';
import NewsStore from './NewsStore';

export default combineReducers({
    NewsQueryResponse: NewsStore
});