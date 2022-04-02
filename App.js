import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button, Card } from 'react-native-paper';

export default function App() {
  console.log("Hola como estas?");
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Hola Mundo</Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>

        <Card>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    </PaperProvider>

  );
}