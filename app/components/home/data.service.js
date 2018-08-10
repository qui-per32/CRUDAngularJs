export default class dataService {
    constructor($http) {
        this.$http = $http;
        this.loadData();
        
        
    }
    loadData(){
        console.log("entro load");
        
        this.data = JSON.parse(localStorage.getItem('users'))
        if (!this.data) {
            console.log("entro en data load");
            
            this.loadInitialData();
        }
    }
    saveData(){
        localStorage.setItem('users', JSON.stringify(this.data))
    }
    loadInitialData(){
        console.log("entro");
        
        return this.$http.get('/json/usuarios.json')
            .then(response => {
                console.log(response);
                
                this.data = response.data;
                this.saveData(this.data)
            })
    }
    getData() {
        return Promise.resolve(this.data);
        
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
        datos.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.data.push(datos);

        this.saveData();
    }
}