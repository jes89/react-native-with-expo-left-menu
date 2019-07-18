import { Dimensions} from 'react-native';
import { createDrawerNavigator,createAppContainer } from 'react-navigation';
import CustomSidebarMenu from './CustomSidebarMenu';
import NavScreenInfo from './NavScreenInfo';

global.currentScreenIndex = 0;

const DrawerNavigator = createDrawerNavigator(
  NavScreenInfo,
  {
    contentComponent: CustomSidebarMenu,
    drawerWidth: Dimensions.get('window').width - 130,
  }
);

export default createAppContainer(DrawerNavigator);
