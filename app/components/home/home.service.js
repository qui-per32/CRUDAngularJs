export default class homeService {
    constructor($http) {
        this.$http = $http;
    }

    getData() {
        return this.$http.get('./usuarios.json')
            .then((data) =>{ 
                console.log(data);
                return data;
            })
            
    }



}