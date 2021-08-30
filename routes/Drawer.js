import Home from './cryptoStack';
import {createAppContainer} from 'react-navigation';

const RootBottom = createStackNavigator({
    Home:{
        screen:Home,
    },
})

export default createAppContainer(RootBottom);
