import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sanayzz.jetcode',
  appName: 'JetEditor',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
