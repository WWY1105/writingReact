import React from 'react';
import ReactDOM from 'react-dom';
 import './index.less';
 import './assets/css/iconfont.css';
 import Index from './pages/index/index'
 import Mine from './pages/mine/mine';
 import Mission from './pages/mission/mission';
 import Circle from './pages/circle/circle';
 import SearchWriterResult from './pages/searchWriterResult/searchWriterResult'
 import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'; 

import { BrowserRouter,Route ,Switch} from 'react-router-dom'


import store from './store/index';
ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter >
               <Switch>
                   <Route path='/' exact component={Index}/>
                   <Route path='/circle' component={Circle}/>
                   <Route path='/mine' component={Mine}/>
                   <Route path='/mission' component={Mission}/>
                   <Route path="/searchWriterResult" component={SearchWriterResult}/>
                     {/* {renderRoutes(routes)} */}
                </Switch>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root'));

/**
 * <BrowserRouter />其实就是 <Router history={history}>
 * 所以，不需要在额外写history
 * 使用的时候，直接：this.props.history.push()
 */
serviceWorker.unregister();
