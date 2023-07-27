import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Theme } from './Home';
import { Task } from './Task';

export type Props = {
  theme: Theme;
  translations: { [key: string]: string };
};

const Stack = createNativeStackNavigator();

export function Todo(props: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App">
          {(navProps) => <Home {...navProps} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Task">
          {(navProps) => <Task {...navProps} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
