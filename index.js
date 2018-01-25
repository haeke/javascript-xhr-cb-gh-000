
function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRespositories('GET', 'https://api.github.com/octocat/repos'));
  req.send();
}

function showRepositories(event, data) {
  console.log(this.responseText);
}