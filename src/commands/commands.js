/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global global, Office, self, window */

Office.onReady(() => {
  // If needed, Office.js is ready to be called

  Excel.run(async function (context) {
    var myButton = context.workbook.commands.getByName("MaterialMasterUpdate");
  
    myButton.load("controlProperties");
  
    await context.sync();
    myButton.controlProperties.size = "large";
    myButton.controlProperties.align = "center";
    return await context.sync();
  });  
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
console.log("inside the login ");
  event.completed();
}

function MaterialMasterGet(event) {
  // write MaterialMasterGet function statements over here 
  console.log("inside the MaterialMasterGet ");
    event.completed();
  }

  function MaterialMasterExport (event) {
    // write MaterialMasterExport function statements over here 
    console.log("inside the MaterialMasterExport ");
      event.completed();
    }
    function MaterialMasterUpdate (event) {
      // write MaterialMasterExport function statements over here 
      console.log("inside the MaterialMasterExport ");
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
g.login = login
g.MaterialMasterGet = MaterialMasterGet
g.MaterialMasterExport = MaterialMasterExport
g.MaterialMasterUpdate = MaterialMasterUpdate
