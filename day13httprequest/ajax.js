const btn = document.getElementById('btn');
btn.addEventListener('click', getUsers);

function getUsers(e) {
  e.preventDefault();

  const XMLRequest = new XMLHttpRequest();

  // initialize request // XMLHttpRequest.open(method, url[, async[, user[, password]]])

  XMLRequest.open('GET', 'users.json', true);
  // specify type
  XMLRequest.responseType = 'json';

  // XMLHttpRequest: load event
  XMLRequest.onload = function () {
    // XMLHttpRequest.status
    if (this.status === 200) {
      // return value depending on "XMLRequest.responseType"
      // console.log(this.response);
      // [{…}, {…}, {…}]
      // specify text type
      // console.log(this.responseText);
      // const users = JSON.parse(this.responseText);
      const users = this.response;
      console.log(users);
      let output = '';
      users.forEach((user) => {
        output += `
        <hr>
        <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Age: ${user.age}</li>
          <li>Mail: ${user.email}</li>
        </ul>
        `.trim();
      })
      document.getElementById('users').innerHTML = output;
    }
  }
  // send request
  XMLRequest.send();
}


/**
 * NOTE:
 * 1. initialize request
 * 2. when request is loaded(or specified timing):
 *  a. check status
 *  b. get data
 * 3. send request
 *  */ 