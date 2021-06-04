import React from 'react';
import {

    Image,
    
} from 'react-native';


import {Home} from '../screens';

import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                components={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image
                            source={icons.cutlery}
                            resizeMade="contain"
                            style={{
                                width: 25,
                                height: 25, 
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    }
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;