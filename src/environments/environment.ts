// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostname: 'https://gateway.marvel.com/v1/public/',
  apiKeyPublic: 'ae71e575464f7b7b8376cafc050214cc',
  apiKeyPrivate: 'f303c746eb729a45ed4a89abed7d8d41802f38b3',
  apiKey: 'AIzaSyDkga59TIPqHCcg6Sg3SG8m6Jw-gEyp9qI',

  firebase: {
    authDomain: 'characters-marvel-crud.firebaseapp.com',
    projectId: 'characters-marvel-crud',
    storageBucket: 'characters-marvel-crud.appspot.com',
    messagingSenderId: '839360568455',
    appId: '1:839360568455:web:47fd2c8b24570755cdac22',
    measurementId: 'G-ND7PEZES0D'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
