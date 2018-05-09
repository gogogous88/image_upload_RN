// Use local .env file for env vars when not deployed

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
  accessKeyId: "AKIAI64GB7F3PVCA746A",
  secretAccessKey: "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",
  region: "us-east-2"
});

// Initialize multers3 with our s3 config and other options
const upload = multer({
  storage: multerS3({
    s3,
    bucket: "markmoo",
    acl: "public-read",
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, Date.now().toString() + ".png");
    }
  })
});

const uploadGalary = multer({
  storage: multerS3({
    s3,
    bucket: "usergalary",
    acl: "public-read",
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, Date.now().toString() + ".png");
    }
  })
});

//push Notification by expo:
require("./pushNotification");

// Expose the /upload endpoint
const express = require("express");
const app = express();

app.post("/upload", upload.single("photo"), (req, res, next) => {
  console.log("something is requested");
  res.json(req.file);
});

app.post("/upload_galary", uploadGalary.single("photo"), (req, res, next) => {
  console.log("something is requested");
  res.json(req.file);
});

require("./myJsonFile")(app);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(5000, () => console.log("Example app listening on port 5000!"));
