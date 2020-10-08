// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = (req, res) => {
  console.log('Hello logs!');
  return res.status(200).json({ message: 'Hello World! This is team 25.' });
};

// request-type: POST
// URL: /who
// sample request (content-type: JSON)
// {
//   "message": "Who are you?"
// }
exports.whoAreWe = (req, res) => {
  try {
    console.log('Success');
    if (req.body.message === 'Who are you?') {
      return res
        .status(200)
        .json({ message: 'We are 25 $lackers. JPMorgan pls recruit us :/' });
    } else {
      return res.status(200).json({ message: 'Try again.' });
    }
  } catch (err) {
    console.error('Failure');
    return res.status(400).json({ error: 'Bad request ' });
  }
};
