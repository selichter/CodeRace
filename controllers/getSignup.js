/* GET leaderboard listing. */
function getSignup(req, res) {
  var options = {
    root: './views/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('signup.html', options);
}

module.exports = getSignup;
