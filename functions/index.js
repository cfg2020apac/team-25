const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();
// const db = admin.firestore();
const app = express();
app.use(cors());

//handler imports
const { helloWorld, whoAreWe } = require('./handlers/helloWorld');
const volunteersByGender = require('./handlers/volunteersByGender');
const volunteersByLanguage = require('./handlers/volunteersByLanguage');
const volunteersByResidentialStatus = require('./handlers/volunteersByResidentialStatus');
const mostPopularEventTypes = require('./handlers/mostPopularEventTypes');

//routes
app.get('/', helloWorld);
app.post('/who/', whoAreWe);
app.get('/volunteersByGender', volunteersByGender);
app.get('/volunteersByLanguage', volunteersByLanguage);
app.get('/volunteersByResidentialStatus', volunteersByResidentialStatus);
app.get('/mostPopularEventTypes', mostPopularEventTypes);

exports.api = functions.https.onRequest(app);
