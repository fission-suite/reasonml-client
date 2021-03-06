// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Mocks$ReasonmlClient = require("../src/Mocks.bs.js");
var Fission$ReasonmlClient = require("../src/Fission.bs.js");

var FissionMock = Fission$ReasonmlClient.FissionInject(Mocks$ReasonmlClient.Axios_mock);

Jest.describe("Fission.Simple", (function (param) {
        Jest.test("gives properly formatted urls for IPFS content", (function (param) {
                return Jest.Expect[/* toEqual */12](Mocks$ReasonmlClient.baseURL + ("/ipfs/" + Mocks$ReasonmlClient.strCID), Jest.Expect[/* expect */0](Fission$ReasonmlClient.url(Mocks$ReasonmlClient.baseURL, Mocks$ReasonmlClient.strCID)));
              }));
        Jest.describe("retrieves string content", (function (param) {
                var ipfsContent = /* record */[/* contents */""];
                Jest.beforeAllPromise(undefined, (function (param) {
                        return Curry._2(FissionMock[/* content */8], Mocks$ReasonmlClient.baseURL, Mocks$ReasonmlClient.strCID).then((function (value) {
                                      ipfsContent[0] = value;
                                      return Promise.resolve(value);
                                    }));
                      }));
                return Jest.test("same content as the original", (function (param) {
                              return Jest.Expect[/* toEqual */12](Mocks$ReasonmlClient.strContent, Jest.Expect[/* expect */0](ipfsContent[0]));
                            }));
              }));
        return Jest.describe("retrieves json content", (function (param) {
                      var ipfsContent = /* record */[/* contents */{ }];
                      Jest.beforeAllPromise(undefined, (function (param) {
                              return Curry._2(FissionMock[/* content */8], Mocks$ReasonmlClient.baseURL, Mocks$ReasonmlClient.jsonCID).then((function (value) {
                                            ipfsContent[0] = value;
                                            return Promise.resolve(value);
                                          }));
                            }));
                      return Jest.test("same content as the original", (function (param) {
                                    return Jest.Expect[/* toEqual */12](Mocks$ReasonmlClient.jsonContent, Jest.Expect[/* expect */0](ipfsContent[0]));
                                  }));
                    }));
      }));

Jest.describe("Fission.User", (function (param) {
        var fission = Curry._2(FissionMock[/* User */17][/* create */0], Mocks$ReasonmlClient.baseURL, /* record */[
              /* username */Mocks$ReasonmlClient.username,
              /* password */Mocks$ReasonmlClient.password
            ]);
        Jest.describe("retrieves cids associated with user", (function (param) {
                var cids = /* record */[/* contents : array */[]];
                Jest.beforeAllPromise(undefined, (function (param) {
                        return Curry._1(fission[/* cids */3], /* () */0).then((function (value) {
                                      cids[0] = value;
                                      return Promise.resolve(/* () */0);
                                    }));
                      }));
                return Jest.test("returns list of cids", (function (param) {
                              return Jest.Expect[/* toEqual */12](Mocks$ReasonmlClient.cidList, Jest.Expect[/* expect */0](cids[0]));
                            }));
              }));
        Jest.describe("adds strings to IPFS", (function (param) {
                var cid = /* record */[/* contents */""];
                Jest.beforeAllPromise(undefined, (function (param) {
                        return Curry._1(fission[/* addString */5], Mocks$ReasonmlClient.strContent).then((function (value) {
                                      cid[0] = value;
                                      return Promise.resolve(/* () */0);
                                    }));
                      }));
                return Jest.test("returns valid CID", (function (param) {
                              return Jest.Expect[/* toEqual */12](Mocks$ReasonmlClient.testCID, Jest.Expect[/* expect */0](cid[0]));
                            }));
              }));
        Jest.describe("adds JSON to IPFS", (function (param) {
                var cid = /* record */[/* contents */""];
                Jest.beforeAllPromise(undefined, (function (param) {
                        return Curry._1(fission[/* add */4], Mocks$ReasonmlClient.jsonContent).then((function (value) {
                                      cid[0] = value;
                                      return Promise.resolve(/* () */0);
                                    }));
                      }));
                return Jest.test("returns valid CID", (function (param) {
                              return Jest.Expect[/* toEqual */12](Mocks$ReasonmlClient.testCID, Jest.Expect[/* expect */0](cid[0]));
                            }));
              }));
        Jest.describe("pins content to IPFS", (function (param) {
                return Jest.testPromise("sends request without failing", undefined, (function (param) {
                              return Curry._1(fission[/* pin */7], Mocks$ReasonmlClient.strCID).then((function (_value) {
                                            return Promise.resolve(Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](true)));
                                          }));
                            }));
              }));
        return Jest.describe("deletes content from IPFS", (function (param) {
                      return Jest.testPromise("sends request without failing", undefined, (function (param) {
                                    return Curry._1(fission[/* pin */7], Mocks$ReasonmlClient.strCID).then((function (_value) {
                                                  return Promise.resolve(Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](true)));
                                                }));
                                  }));
                    }));
      }));

exports.FissionMock = FissionMock;
/* FissionMock Not a pure module */
