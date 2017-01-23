
import { combineReducers } from 'redux';

import drawer from './drawer';
import cardNavigation from './cardNavigation';
import user from './user';
import list from './list';
import exercise from './exercise';
export default combineReducers({
  exercise,
  drawer,
  user,
  list,
  cardNavigation,

});
