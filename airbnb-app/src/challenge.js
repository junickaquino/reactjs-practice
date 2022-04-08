const names = ["alice", "bob", "charlie", "dan"];
const capitalized = names.map((name) => {
  return name.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
});

console.log(capitalized);
