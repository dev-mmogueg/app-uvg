'use strict'

/* ----- IMPORTS ----- */
const mongoose = require('mongoose');
const fs = require('fs');
const { isImage } = require('./validate');
const { GridFSBucket } = mongoose.mongo;
const conn = mongoose.connection;

/* --- UPLOAD FILE --- */
exports.upload = (path_file = '', content_type = '', type = '') => {
  try {
    const fs_file = fs.readFileSync(path_file);
    const file_split = path_file.split('\\');
    const name_file = file_split[(file_split.length - 1)];
    const ext = name_file.split('\.')[1];
    switch (type[0].toUpperCase()) {
      case 'I':
        if (!isImage(ext))
          return '';
        break;
    }
    const gridfs = new GridFSBucket(conn.db, {
      bucketName: 'upload'
    });
    const uploadStream = gridfs.openUploadStream(name_file, {
      contentType: content_type
    });
    const buffer = Buffer.from(fs_file, 'binary');
    uploadStream.end(buffer);
    return uploadStream.id;
  } catch (err) {
    console.error(err);
    return err;
  }
}

/* --- GET FILE --- */
exports.get = async (id = '') => {
  try {
    const gridfs = new GridFSBucket(conn.db, {
      bucketName: 'upload'
    });
    if (!await conn.db.collection('upload.files').findOne({
      _id: (new mongoose.Types.ObjectId(id))
    })) return '';
    return new Promise((resolve, reject) => {
      const downloadStream = gridfs.openDownloadStream((new mongoose.Types.ObjectId(id)));
      let content = '';
      downloadStream.on('file', (file) => {
        content = file.contentType;
      });
      resolve({ file: downloadStream, contentType: content });
    });
  } catch (err) {
    console.error(err);
    return err;
  }
}