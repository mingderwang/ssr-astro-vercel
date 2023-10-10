import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import multer from 'multer';

const app = express();
app.use(express.static('dist/client/'));
app.use(ssrHandler);

const upload = multer();
app.post('/upload', upload.array('file'), function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  // req.files['avatar'][0] -> File
  // req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
  console.log(req.files);
  res.json({ fileNames: req.files });
});

app.listen(8080);