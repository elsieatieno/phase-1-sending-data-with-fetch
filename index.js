// Add your code here
function submitData(name, email){
 const userInfo = { 
 name: name,
 mail: email

}
}
const fetchInfo = {
    method: 'POST',
    header: {
        'Content-Type': 'application/json',
        Accept : 'application/json'
    },
    body: JSON.stringify(userInfo),
  };

  fetch("http://localhost:3000/users", fetchInfo)
  .then(res => res.json())

  .then(data => console.log(data))

  .catch(function (error){
  alert('Unauthorized Access');
  console.log(error.message);
})

