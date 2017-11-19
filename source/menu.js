export default function (arrey, className) {
  var menu = document.createElement("ul");
  menu.className = className;
  var listItems = '';
  array.forEach(function (item) {
    lisItems += '<li>' + item + '</li>';
  });
  menu.innerHTML = listItems;
  return menu;

};
