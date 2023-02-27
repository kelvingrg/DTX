/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */
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
                  enabled: true,
                },
              ],
            },
          ],
        },
      ],
    });
  }
});
// The initialize function must be run each time a new page is loaded
Office.onReady(() => {
  document.getElementById("sideload-msg").style.display = "none";
  document.getElementById("app-body").style.display = "flex";
  document.getElementById("run").onclick = run;
});

export async function run() {
  try {
    await Excel.run(async (context) => {
      /**
       * Insert your Excel code here
       */
        enableButton();
      const range = context.workbook.getSelectedRange();

      // Read the range address
      range.load("address");

      // Update the fill color
      range.format.fill.color = "yellow";

      await context.sync();
      console.log(`The range address was ${range.address}.`);
    });
  } catch (error) {
    console.error(error);
  }
}
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
