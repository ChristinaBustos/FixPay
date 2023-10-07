const axios = require('axios'); // Asegúrate de importar Axios si no lo has hecho antes

export default function connection(props) {

const {data}= props;

const apiKey = "key_mRtflzDbQGCMAp3vMMKzvEs"; // Reemplaza con tu clave de autenticación real

const config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://api.conekta.io/orders",
  headers: {
    Accept: "application/vnd.conekta-v2.1.0+json",
    "Content-type": "application/json",
    Authorization: `Bearer ${apiKey}`, // Utiliza tu clave de autenticación real
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    console.log('Ya mando el correo')
  })
  .catch(function (error) {
    console.log(error);
  });
}

