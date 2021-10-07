
export interface ISimpleUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface IMessage {
  text: string;
  id: string;
  user: ISimpleUser;
}

export interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
}
