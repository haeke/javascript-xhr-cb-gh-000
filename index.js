
function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories('GET', 'https://api.github.com/users/octocat/repos'));
  req.send();
}

function showRepositories(event, data) {
  console.log(this.responseText);
}