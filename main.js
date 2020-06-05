const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(node);
  const text = document.createTextNode(txt);
  txt && element.appendChild(text);
  attr && element.setAttribute(attr, value);
  document.querySelector(".content").appendChild(element);
};

const addForm = document.querySelector(".form--add");
addForm.addEventListener("submit", e =>
  addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
  )
);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const showInfo = (elements, infoElement) => {
  console.log(elements, infoElement);
  elements.forEach(element => {
    const item = document.createElement("div");
    item.className = "result__elements";
    item.innerHTML = `
      <div>${element.nodeName}</div>
      <div>Klasy: ${element.className}</div>
      <div>Wysokość elementu ( offsetHeight ): ${element.offsetHeight}</div>
      <div>Szerokość elementu ( offsetWidth ): ${element.offsetWidth}</div>
      <div>Odległość od lewej krawędzi ( offsetLeft ): ${element.offsetLeft}</div>
      <div>Odległość od górnej krawędzi ( offsetTop ): ${element.offsetTop}</div>
      <div>Liczba elementów dzieci ( childElementCount )${element.childElementCount}</div>
      `;
    infoElement.appendChild(item);
  });
};

const searchElements = (e, nameElement) => {
  e.preventDefault();
  const infoElement = document.querySelector(".result");
  infoElement.textContent = "";
  const elements = document.querySelectorAll(nameElement);
  if (elements.length) {
    infoElement.innerHTML = `<p class="result__info">W tym dukumencie znalazłem: ${elements.length} elemantów: ${nameElement}</p>`;
    showInfo(elements, infoElement);
  } else {
    infoElement.innerHTML = `<p class="result__info">W tym dukumencie nie znalazłem elemantów: ${nameElement}</p>`;
  }
};

const searchForm = document.querySelector(".form--search");

searchForm.addEventListener("submit", e =>
  searchElements(e, searchForm.elements["searching-element"].value)
);
