// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Axios = require("bs-axios/src/axios.js");
var Axios$1 = require("axios");

function $$await(promise) {
  return promise.then((function (response) {
                return Promise.resolve(response.data);
              }));
}

function convAuth(auth) {
  return {
          username: auth[/* username */0],
          password: auth[/* password */1]
        };
}

var octetHeader = Axios.$$Headers[/* fromObj */0]({
      "content-type": "application/octet-stream"
    });

function octetConfig(auth) {
  return {
          headers: octetHeader,
          auth: convAuth(auth)
        };
}

function blankConfig(auth) {
  return {
          auth: convAuth(auth)
        };
}

function ipfsURL(domain) {
  return domain + "/ipfs";
}

function cidsURL(domain) {
  return domain + "/ipfs/cids";
}

function url(domain, cid) {
  return domain + "/ipfs/" + cid;
}

function content(base, cid) {
  return $$await(Axios$1.get(url(base, cid)));
}

function cids(base, auth, param) {
  return $$await(Axios$1.get(base + "/ipfs/cids", blankConfig(auth)));
}

function add(base, auth, content) {
  return $$await(Axios$1.post(base + "/ipfs", content, octetConfig(auth)));
}

function addString(base, auth, _str) {
  return $$await(Axios$1.post(base + "/ipfs", _str, octetConfig(auth)));
}

function addStream(base, auth, _stream) {
  return $$await(Axios$1.post(base + "/ipfs", _stream, octetConfig(auth)));
}

function pin(base, auth, cid) {
  return $$await(Axios$1.put(url(base, cid), { }, blankConfig(auth)));
}

function remove(base, auth, cid) {
  return $$await(Axios$1.delete(url(base, cid), blankConfig(auth)));
}

function create(base) {
  return /* record */[
          /* base */base,
          /* url */(function (param) {
              return url(base, param);
            }),
          /* content */(function (param) {
              return content(base, param);
            })
        ];
}

var Simple = /* module */[/* create */create];

function create$1(base, auth) {
  return /* record */[
          /* base */base,
          /* url */(function (param) {
              return url(base, param);
            }),
          /* content */(function (param) {
              return content(base, param);
            }),
          /* cids */(function (param) {
              return cids(base, auth, param);
            }),
          /* add */(function (param) {
              return add(base, auth, param);
            }),
          /* addString */(function (param) {
              return addString(base, auth, param);
            }),
          /* addStream */(function (param) {
              return addStream(base, auth, param);
            }),
          /* pin */(function (param) {
              return pin(base, auth, param);
            }),
          /* remove */(function (param) {
              return remove(base, auth, param);
            })
        ];
}

var User = /* module */[/* create */create$1];

var newSimple = create;

var newUser = create$1;

exports.$$await = $$await;
exports.convAuth = convAuth;
exports.octetHeader = octetHeader;
exports.octetConfig = octetConfig;
exports.blankConfig = blankConfig;
exports.ipfsURL = ipfsURL;
exports.cidsURL = cidsURL;
exports.url = url;
exports.content = content;
exports.cids = cids;
exports.add = add;
exports.addString = addString;
exports.addStream = addStream;
exports.pin = pin;
exports.remove = remove;
exports.Simple = Simple;
exports.newSimple = newSimple;
exports.User = User;
exports.newUser = newUser;
/* octetHeader Not a pure module */
