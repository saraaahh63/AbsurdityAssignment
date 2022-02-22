var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  document.getElementById("count").innerHTML = "Number of times you have interacted with electricity: " + count;
  alert("+1! You interacted with electricity again by pressing the button!");
  count += 1;
  document.getElementById("count").innerHTML = "Number of times you have interacted with electricity: " + count;
  while(confirm){
    alert("By pressing 'OK,' you interacted with electricity again!");
    count += 1;
    document.getElementById("count").innerHTML = "Number of times you have interacted with electricity: " + count;
  }
};
