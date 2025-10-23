import axios from 'axios';

import '../css/styles.css';

const BASE_URL = 'http://localhost:3000/todos';

axios(BASE_URL, {
  params: {
    api_key: 'lalala',
    limit: 10,
  },
})
  .then(response => console.log(response.data))
  .catch(error => console.log(error));

// axios
//   .post(BASE_URL, {
//     title: 'купити хліб',
//     completed: false,
//   })
//   .then(response => console.log(response))
//   .catch(error => console.log(error.message));
