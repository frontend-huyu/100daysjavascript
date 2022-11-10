const btn = document.getElementById('btn');
btn.addEventListener('click', getUsers);

function getUsers(e) {
  e.preventDefault();

  fetch('users.json')
    .then((response) => {
      return response.json();
      // return response.text(); // string
    })
    .then((data) => {
      // console.log(Object.prototype.toString.call(data)); // [object Array]
      let output = '';
      data.forEach((user) => {
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
    })
}