export default class homeService {
    constructor($http) {
       this.$http = $http;
    }

    getData() {
        return this.$http.get('/json/usuarios.json')
            .then(response => response.data)
    }
}