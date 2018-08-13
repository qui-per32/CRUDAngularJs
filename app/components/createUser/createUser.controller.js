class CreateUserController {
    constructor(dataService, $state) {
        this.state = $state
        this.dataService = dataService;
        this.newUser = [];
    }

    createNewUser(form) {
        console.log(form);
        
        if(form.$invalid === true) {
            return
        } else {

            this.newUser.tipo = 'paciente';
            this.dataService.newUser(this.newUser);
            this.state.go('home');
        }
        
      
        

    }
}

export default CreateUserController;