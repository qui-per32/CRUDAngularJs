export default class dataService {
    constructor($http) {
       this.$http = $http;
       this.data = [];
    }

    getData() {
        return this.$http.get('/json/usuarios.json')
            .then(response => {
                this.data = response.data;
                return this.data;
            })
    }

    deleteUser(id){
        console.log(id);
        
        this.data.splice(id, 1);  
        
              
    }
}