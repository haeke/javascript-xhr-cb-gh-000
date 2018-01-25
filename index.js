
function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '"onclick="getCommits(this)">Get Commits</a></li>').join('')}
  </ul`;
  document.getElementById("repositories").innerHTML = repoList;
}

function getCommits(el) {
  console.log(this);
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showCommits)
  req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits');
  req.send();
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}