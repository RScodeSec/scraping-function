'use strict';
/*
To enable the initializer feature (https://help.aliyun.com/document_detail/156876.html)
please implement the initializer function as below：
exports.initializer = (context, callback) => {
  console.log('initializing');
  callback(null, '');
};
*/
import {syncProcess} from './main.js'
/*exports.handler = (event, context, callback) => {
  // const eventObj = JSON.parse(event.toString());
  console.log('hello world 1');
  syncProcess();
  callback(null, 'hello ');
}*/
syncProcess();