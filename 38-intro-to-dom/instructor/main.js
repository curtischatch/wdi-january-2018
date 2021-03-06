document.addEventListener('DOMContentLoaded', function(e){
  // CODE GOES HERE

  var title = document.querySelector('#page-title');
  title.innerText = "I'm doing it!";

  setInterval(flashColors, 50);

  var image = document.querySelector('img');
  image.src = "img/spooky.gif"

  var items = document.querySelectorAll("li")
  items.forEach(function(item){
    item.innerHTML = "<span>Foo</span>";
  });

  var list = document.querySelector('ul');
  list.removeChild(items[0]);

  list.appendChild(items[1]);

  list.insertBefore(items[1], items[2]);

  var clonedItem = items[0].cloneNode(true)
  list.appendChild(clonedItem);

  var pTag = document.createElement('p');
  pTag.innerText = "I am p tag";
  var main = document.querySelector('main');
  main.appendChild(pTag);
})

function flashColors() {
  var title = document.querySelector('#page-title');
  var colors = ["red", "blue", "yellow", "green"]
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  title.style.color = randomColor;
}
