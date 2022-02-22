var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  document.getElementById("count").innerHTML = count;
  alert("+1! You interacted with electricity again by pressing the button!");
  count += 1;
  document.getElementById("count").innerHTML = count;
  alert("By pressing 'OK,' you interacted with electricity again!");
  count += 1;
  document.getElementById("count").innerHTML = count;
};