const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is not found
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // This is where the error occurs. No response is sent back to the client
    console.error('User not found');
  } else {
    res.json(user);
  }
});

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.listen(3000, () => console.log('Server listening on port 3000'));