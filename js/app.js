function HandlerCreate_Card() {
  const main = document.getElementById("main");
  const name = document.getElementById("Name").value;

  const users = document.createElement("ul");
  users.className = "users-list";
  main.appendChild(users);

  const user = document.createElement("li");
  user.className = "user-item";
  users.appendChild(user);

  const card = document.createElement("div");
  card.className = "card user-item__content";
  user.appendChild(card);

  const link = document.createElement("a");
  link.href = "#";
  // TODO: agregar el evento
  link.addEventListener("click", HandlerClick_Card);
  card.appendChild(link);

  const userItemImage = document.createElement("div");
  userItemImage.className = "user-item__image avatar";
  link.appendChild(userItemImage);

  const image = document.createElement("img");
  image.src = `img/${name}.jpg`;
  userItemImage.appendChild(image);

  const userItemInfo = document.createElement("div");
  userItemInfo.className = "user-item__info";
  link.appendChild(userItemInfo);

  const nombreUser = document.createElement("h2");
  nombreUser.innerHTML = name;
  userItemInfo.appendChild(nombreUser);

  const visitas = document.createElement("h3");
  visitas.innerHTML = "0";
  userItemInfo.appendChild(visitas);
}

function HandlerClick_Card(event) {
  const userInfoVisitas = event.currentTarget.children[1].children[1];
  userInfoVisitas.innerHTML = parseInt(userInfoVisitas.innerHTML) + 1;
}
