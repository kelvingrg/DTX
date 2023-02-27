/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global global, Office, self, window */

Office.onReady(() => {
  // If needed, Office.js is ready to be called
  console.log("inside office addin beacon dtx");
  enableButton();
  function enableButton() {
    Office.ribbon.requestUpdate({
      tabs: [
        {
          id: "BeaconDtx",
          groups: [
            {
              id: "MaterialMaster",
              controls: [
                {
                  id: "MaterialMasterGet",
                  enabled: false,
                },
              ],
            },
          ],
        },
      ],
    });
  }
});

/**
 * Shows a notification when the add-in command is executed.
 * @param event
 */
function action(event) {
  // Your code goes here

  // Be sure to indicate when the add-in command function is complete
  event.completed();
}
function login(event) {
  // write login functiond=s here
  Office.context.ui.displayDialogAsync(
    "https://localhost:3000/login.html",
    { height: 62, width: 45, displayInIframe: true }

    // TODO2: Add callback parameter.
  );
  event.completed();
}

function MaterialMasterGet(event) {
  // write MaterialMasterGet function statements over here
  console.log("inside the MaterialMasterGet ");
  event.completed();
}

function MaterialMasterExport(event) {
  // write MaterialMasterExport function statements over here
  console.log("inside the MaterialMasterExport ");
  event.completed();
}
function MaterialMasterUpdate(event) {
  // write MaterialMasterExport function statements over here
  console.log("inside the MaterialMasterUpdate ");
  event.completed();
}

function bomGet(event) {
  // write bomGet function statements over here
  console.log("inside the bomGet ");
  event.completed();
}

function bomUpdate(event) {
  // write bomUpdate function statements over here
  console.log("inside the bomUpdate ");
  event.completed();
}

function bomCreate(event) {
  // write bomCreate function statements over here
  console.log("inside the bomCreate ");
  event.completed();
}

function getFlatBom(event) {
  // write getFlatBom function statements over here
  console.log("inside the getFlatBom ");
  event.completed();
}

function getProjectBom(event) {
  // write getProjectBom function statements over here
  console.log("inside the getProjectBom ");
  event.completed();
}
function getGlobal() {
  return typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : undefined;
}

const g = getGlobal();

// the add-in command functions need to be available in global scope
g.action = action;
g.login = login;
g.MaterialMasterGet = MaterialMasterGet;
g.MaterialMasterExport = MaterialMasterExport;
g.MaterialMasterUpdate = MaterialMasterUpdate;
g.bomGet = bomGet;
g.bomUpdate = bomUpdate;
g.bomCreate = bomCreate;
g.getFlatBom = getFlatBom;
g.getProjectBom = getProjectBom;
