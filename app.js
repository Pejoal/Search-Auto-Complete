// For Testing Purposes
let c = console.log.bind(document);

// Initialize Data
let searchData = [
  'google',
  'youtube',
  'facebook',
  'twitter',
  'instagram',
  'viber',
  'whatsapp',
  'python',
  'java',
  'javascript',
  'flutter',
  'html',
  'css',
  'sass',
  'typescript',
  'gulp',
  'pug',
  'PHP',
  'Node.js',
  'MongoDB',
  'MySQL'
];

function doSearch() {
  let view = document.getElementById("view");
  let search = document.getElementById("search");
  view.textContent = "";

  // var autoComplete = true;
  searchData.forEach(el => {
    let searchValue = search.value.toLowerCase();
    if (el.search(searchValue) !== -1 && searchValue !== "") {
      // c("yes" + el);
      let li = document.createElement("li");
      let txtNode = document.createTextNode(el);
      li.append(txtNode);
      view.appendChild(li);
    } else if (search.value === "") {
      view.textContent = "";
    }

  })
  let lis = document.querySelectorAll("#view > li");
  lis = Array.from(lis);
  lis.forEach(el => {
    el.addEventListener("click", () => {
      search.value = el.textContent;
      view.textContent = "";
    })
  })
}