# JP Morgan Code for Good 2020 APAC - Team 25

Made by seven legends and an even more legendary mentor.

To run the web app:
```
cd webapp
npm i
npm run start
```

To run the mobile app, first install Flutter with the instructions from https://flutter.dev/docs/get-started/install, then
```
cd mobileapp
flutter pub get
flutter run
```

To run the Firebase Functions, first install the Firebase CLI with the instructions from https://firebase.google.com/docs/functions/get-started#set-up-node.js-and-the-firebase-cli, then
```
cd functions
firebase serve --only functions
```

Required configuration for Firebase Functions:
```
twilio:
  account_sid
  auth_token
  from_phone_number
  messaging_sid
nodemailer:
  gmail:
    email
    app_password
```

##### The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC").						JPMC did not create or contribute to the development of the Code.  This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code,						including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.