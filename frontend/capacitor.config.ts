import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rand.randai',
  appName: 'Rand AI',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
