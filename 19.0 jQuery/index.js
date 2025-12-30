$("button").click(iGotClicked);

function iGotClicked() {
  var id = $(this).attr("id");
  if (id === undefined) {
    id = "no id found";
  }
  alert(id);
}

$("h1").click(function () {
  var h1 = $(this);

  if (h1.css("color") === "rgb(128, 0, 128)") {
    h1.css("color", "black");
  } else {
    h1.css("color", "purple");
  }

  console.log(h1.css("color"));
});

$("#btnClear").click(function () {
  $("h1").text("");
});

$("#input1").keypress(function (event) {
  console.log(event.key);
  var h1Text = $("h1").text();
  h1Text += event.key;
  $("h1").text(h1Text);
});
