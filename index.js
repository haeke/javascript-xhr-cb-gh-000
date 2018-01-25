
function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  document.getElementById("repositories").innerHTML = repoList;
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}