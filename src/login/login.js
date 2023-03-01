import axios from "axios";
// (function () {
//   Office.onReady().then(function () {
//     document.getElementById("submit").onclick = sendStringToParentPage;
//   });

//   function sendStringToParentPage() {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     console.log(email, password);
//     axios
//       .post("https://dev-be.beacon-dtx.com/user/login", { email: email, password: password })
//       .then((response) => {
//         console.log("login success full ", response.message);
//       })
//       .catch((response) => {
//         console.log(response.message);
//       });

//     Office.context.ui.messageParent();
//   }
// })();

/* eslint-disable no-undef */
(async () => {
  $("#submit").click(function (e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    console.log("reached inside login fn");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email, password);
    axios
      .post("https://dev-be.beacon-dtx.com/user/login", { email: email, password: password })
      .then((response) => {
        console.log("login success full ", response.data.message);
        Office.context.ui.messageParent(response.data.message);
      })
      .catch((response) => {
        document.getElementById("message").innerHTML = response.response.data.message;
      });
    // Office.context.ui.messageParent(formdata);
  });
})();
