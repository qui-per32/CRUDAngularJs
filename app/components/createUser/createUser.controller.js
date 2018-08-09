class CreateUserController {
    constructor(dataService) {

        this.dataService = dataService;
        this.newUser = [];
    }

    createNewUser(){
        this.newUser.tipo= 'paciente';
        this.dataService.newUser(this.newUser);
        
    }
}

export default CreateUserController;