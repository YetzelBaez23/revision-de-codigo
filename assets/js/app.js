const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/* se cambia el nombre de las variables para mejorar legibilidad se le pone el punto a name, blog y location por que son una clase. */ 

const name = document.querySelector('.name');
const blog = document.querySelector('.blog');
const location = document.querySelector('.location');

/* se le agrega el async por que solo se puede poner await en funcion asincrona*/ 
async function displayUser(username) {
  $n.textContent = 'cargando...';
   /* se le cambia el nombre de response a data */ 
  const data = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  /* se le cambia las commilas normales a back ticks */ 
  name.textContent = `${data.name}`;
  blog.textContent = `${data.blog}`;
  location.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  name.innerHTML = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);