class NewProfesionalController {
    constructor(dataService) {

        this.dataService = dataService;
        this.newUser = [];
    }

     createNewUser(){
        this.newUser.tipo= 'profesional';
        this.dataService.newUser(this.newUser);
        
    }
}

export default NewProfesionalController;