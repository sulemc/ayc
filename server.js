const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

const smurfs = [];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = 0;

server.post('/smurfs', (req, res) => {
  const { name, email, zip } = req.body;
  const newSmurf = { name, email, zip, id: smurfId };
  if (!name || !email || !zip) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByEmail = smurf => {
    return smurf.email === email;
  };
  if (smurfs.find(findSmurfByEmail)) {
    return sendUserError(
      `Ya gone did smurfed! ${email} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs', (req, res) => {
  const { id, name, email, zip } = req.body;
  const findSmurfById = smurf => {
    return smurf.id === id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.email = email;
    if (height) foundSmurf.zip = zip;
    res.json(foundSmurf);
  }
});

server.delete('/smurfs', (req, res) => {
  const { id } = req.body;
  let foundSMurf;
  const findSmurfById = smurf => {
    foundSMurf = smurf;
    return smurf.id === id;
  };
  if (smurfs.find(findSmurfById)) {
    smurfs.forEach((smurf, i) => {
      if (smurf.id === id) {
        smurfs.splice(i, 1);
        return res.status(200).json({ SmurfRemoved: foundSMurf });
      }
    });
  } else {
    return sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});