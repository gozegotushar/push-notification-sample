package com.reactnativeprojectfirst;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.google.firebase.FirebaseApp;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    FirebaseApp.initializeApp(this);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactnativeProjectFirst";
  }
}
