(function (d) {
  var reqId = "0";
  function setEventListeners() {
    var next = d.getElementById("nextBtn"),
      prev = d.getElementById("prevBtn");
    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
    console.log("next");
  }

  function moveNext() {
    if (reqId != "4") {
      var newId = parseInt(reqId);
      newId = newId + 1;
      newId = newId.toString();
    } else {
      var newId = "0";
    }

    var oldImg = d.getElementById(reqId);
    var newImg = d.getElementById(newId);

    oldImg.style.opacity = "0";
    newImg.style.opacity = "1";
    reqId = newId;
  }

  function movePrev() {
    if (reqId != 0) {
      var newId = parseInt(reqId);
      newId = newId - 1;
      newId = newId.toString();
    } else {
      var newId = "4";
    }
    var oldImg = d.getElementById(reqId);
    var newImg = d.getElementById(newId);
    oldImg.style.opacity = "0";
    newImg.style.opacity = "1";
    reqId = newId;
  }

  setEventListeners();
})(document);
