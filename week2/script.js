
let search = document.createElement('input');
document.body.appendChild(search);
search.setAttribute('type', 'search');
search.setAttribute('id', 'searchIn');

let button = document.createElement('button');
document.body.appendChild(button);
let searchButton = document.createTextNode("Search Here");
button.appendChild(searchButton);

let list = document.createElement('ul');
document.body.appendChild(list);
list.setAttribute('id', 'repoList')

let userName = document.querySelector('#searchIn').value;
let repositoriesUrl = 'https://api.github.com/users/' + "malnajar" + '/repos';

document.querySelector('#searchIn').addEventListener('keypress', function (enter) {
    let key = enter.which || enter.keyCode;
    if (key === 13) {
        githubUserSearch('GET', repositoriesUrl)
            .then(function (datums) {
                console.log(datums);
            })
            .catch(function (err) {
                console.error('Augh, there was an error!', err.statusText);
            });
    }
});

button.addEventListener('click', githubUserSearch('GET', repositoriesUrl)
    .then(function (datums) {
        console.log(datums);
    })
    .catch(function (err) {
        console.error('Augh, there was an error!', err.statusText);
    }));


function githubUserSearch(method, url) {

    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status = 200) {
                console.log("Successfully loaded");
                resolve(xhr.response);
                let repoList = document.getElementById('repoList');

                while (repoList.firstChild) {
                    repoList.removeChild(repoList.firstChild);
                }

                let repositories = JSON.parse(xhr.responseText).map(userRepositories => {

                    let listItems = document.createElement('li');
                    list.appendChild(listItems);
                    listItems.innerHTML = userRepositories.name;

                    let commitList = document.createElement('ul');
                    listItems.appendChild(commitList);

                    let commitsXHR = new XMLHttpRequest();
                    commitsXHR.onreadystatechange = () => {
                        if (commitsXHR.readyState === XMLHttpRequest.DONE) {
                            if (commitsXHR.status !== 200) {
                                console.log("Something went wrong");
                            } else {

                                console.log("Successfully loaded");

                                let committers = JSON.parse(commitsXHR.responseText);

                                let listItems2 = document.createElement('li');
                                commitList.appendChild(listItems2);

                                listItems2.innerHTML = committers[0].commit.author.name;
                                let avatarImg = document.createElement('img');
                                avatarImg.src = committers[0].author.avatar_url;
                                avatarImg.setAttribute('width', '100 px');
                                avatarImg.setAttribute('height', '100 px');
                                listItems2.appendChild(avatarImg);
                            }


                        } else {
                            console.log("Something went wrong")
                            reject({
                                status: this.status,
                                statusText: xhr.statusText
                            });
                        }

                    }

                    commitsXHR.open('GET', 'https://api.github.com/repos/' + "malnajar" + '/' + userRepositories.name + '/commits', true);
                    commitsXHR.send();
                })
            }    
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}
