// We also need methods fore retrieving data from ServiceWorkerRegistration. In the case we access protected 
// resources, the HTTP request needs Authorization header

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer' + user.accessToken };
    } else {
        return {};
    }
}