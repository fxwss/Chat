import { IFirebaseConfig } from './../../types';

export default function getFirebaseConfig() {
  // see: https://create-react-app.dev/docs/adding-custom-environment-variables/
  const json = process.env.REACT_APP_FIREBASE_CONFIG as string;
  return JSON.parse(JSON.parse(json)) as IFirebaseConfig;
}

