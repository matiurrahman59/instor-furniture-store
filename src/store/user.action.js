import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../utils/firebase/FirebaseUtils';
import { uiActions } from './ui-slice';

// These functions below is called thunk and allows us to perform async logic.
export const signIn = (email, password) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification());
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('no user with this email');
          break;
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        default:
          console.log(error);
      }
    }
    dispatch(uiActions.showNotification());
    dispatch(uiActions.toggleSignInFormStatus());
  };
};

export const signUp = (email, password, displayName) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.showNotification());
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else if (error.code === 'auth/invalid-email') {
        alert('Cannot create user, email invalid');
      } else console.log('something went wrong', error);
    }
    dispatch(uiActions.showNotification());
    dispatch(uiActions.toggleSignUpFormStatus());
  };
};
