(async () => {
  $("#close").click(function (e) {
    e.preventDefault();
    Office.context.ui.messageParent("close");
  });
  $("#logout").click(function (e) {
    e.preventDefault();
    Office.context.ui.messageParent("logout");
  });
})();
