export default class dataService {
    constructor($http) {
        this.$http = $http;
        this.loadData();

    }
    loadData(){
        this.data = JSON.parse(localStorage.getItem('users'))
    }
    saveData(){
        localStorage.setItem('users', JSON.stringify(this.data))
    }

    getData() {
        return Promise.resolve(this.data);
        // return this.$http.get('/json/usuarios.json')
        //     .then(response => {
        //         this.data = response.data;
        //         return this.data;
        //     })
    }

    deleteUser(id) {
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i].id === id) {
                this.data.splice(i, 1);
            }
            
        }
        
        this.saveData();
    }

    deleteMedic() {
        console.log(this.data);

        var profesiones = "medico";
        for (var i = this.data.length - 1; i >= 0; i--) {
            if (this.data[i].tipoProfesional === profesiones) {
                this.data.splice(i, 1)
            }
        }
        this.saveData();

    }

    edit(user) {
        console.log(user);

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === user.id) {
                this.data[i] = user;
            }
        }
        this.saveData();



    }

    newUser(datos){
        console.log(datos);
        datos.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
        this.data.push(datos);

        this.saveData();
    }
}