import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Todo } from '@todo/todoapp';

export const App = () => {
  const theme = {
    primary: '#21990F',
  };

  const translations = {
    'button.title': 'Membuat',
    'input.placeholder': 'Ketik teks tugas...',
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
