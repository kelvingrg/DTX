/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global global, Office, self, window */

Office.onReady(() => {
  // If needed, Office.js is ready to be called
  console.log("inside office addin beacon dtx");
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
    { height: 62, width: 45, displayInIframe: true },
    function (asyncResult) {
      dialog = asyncResult.value;
      dialog.addEventHandler(Office.EventType.DialogMessageReceived, processMessage);
    }
  );
  const processMessage = (arg) => {
    console.log(arg.message);
    localStorage.setItem("beaconToken", arg.message);
    dialog.close();
    enableAllKeys();
  };
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

function enableAllKeys() {
  Office.ribbon.requestUpdate({
    tabs: [
      {
        id: "BeaconDtx",
        groups: [
          {
            id: "LoginGroup",
            controls: [
              {
                id: "LoginButton",
                abel: "Logout",
                Icon: [
                  {
                    size: 16,
                    sourceLocation: "https://localhost:3000/assets/logout-16.png",
                  },
                  {
                    size: 32,
                    sourceLocation: "https://localhost:3000/assets/logout-32.png",
                  },
                  {
                    size: 80,
                    sourceLocation: "https://localhost:3000/assets/logout-80.png",
                  },
                ],
              },
            ],
          },
          {
            id: "MaterialMaster",
            controls: [
              {
                id: "MaterialMasterGet",
                enabled: true,
              },
              {
                id: "MaterialMasterExport",
                enabled: true,
              },
              {
                id: "MaterialMasterUpdate",
                enabled: true,
              },
            ],
          },

          {
            id: "BomGroup",
            controls: [
              {
                id: "BomGroup.Get",
                enabled: true,
              },
              {
                id: "BomGroup.Update",
                enabled: true,
              },
              {
                id: "BomGroup.Create",
                enabled: true,
              },
              {
                id: "BomGroup.GetFlatBom",
                enabled: true,
              },
              {
                id: "BomGroup.GetProjectBom",
                enabled: true,
              },
            ],
          },
          {
            id: "FormGroup",
            controls: [
              {
                id: "FormGroup.Configure",
                enabled: true,
              },
              {
                id: "FormGroup.Map",
                enabled: true,
              },
              {
                id: "FormGroup.SaveMapping",
                enabled: true,
              },
              {
                id: "FormGroup.GetForm",
                enabled: true,
              },
            ],
          },
        ],
      },
    ],
  });
}

function getGlobal() {
  console.log("inside global function");
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
