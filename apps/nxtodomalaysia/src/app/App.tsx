import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Todo } from '@todo/todoapp';

export const App = () => {
  const theme = {
    primary: 'rgba(15, 83, 171, 1)',
  };

  const translations = {
    'button.title': 'Cipta',
    'input.placeholder': 'Taip tugasan...',
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Todo theme={theme} translations={translations} />
      </SafeAreaView>
    </>
  );
};
