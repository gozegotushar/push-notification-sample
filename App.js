import React, { useEffect } from 'react';

import {
  View
} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const checkToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log("FCM TOKEN  : " + fcmToken);
  }
}

function App() {
  checkToken()

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      alert(JSON.stringify(remoteMessage))
    });
    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }} />
  );
};

export default App;
