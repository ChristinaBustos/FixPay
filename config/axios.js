import instance from 'axios';

const AxiosClient = instance.create({
    baseURL: 'https://api.conekta.io/',
});

const requestHandler = (request) => {
    request.headers['Authorization'] = 'Bearer key_mRtflzDbQGCMAp3vMMKzvEs';
    request.headers['Accept'] = 'application/vnd.conekta-v2.1.0+json';
    request.headers['Content-Type'] = 'application/json';
    // const session = JSON.parse(localStorage.getItem('user')) || null;
    // if (session?.isLogged)
    //     request.headers['Authorization'] = `Bearer ${session.token}`;
    return request;
};

const errorResponseHandler = (error) => Promise.reject(error);

const successResponseHandler = (response) => Promise.resolve(response.data);

AxiosClient.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => Promise.reject(error)
);

AxiosClient.interceptors.response.use(
    (response) => successResponseHandler(response),
    (error) => errorResponseHandler(error)
);

export default AxiosClient;