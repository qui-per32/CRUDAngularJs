class NewProfesionalController {
    constructor(dataService,$state) {
        this.state = $state;
        this.dataService = dataService;
        // this.newUser = [];
    }

    createNewUser(form) {
        if (form.$invalid === true) {
            return
        } else {
            this.newUser.tipo = 'profesional';
            this.dataService.newUser(this.newUser);
            this.state.go('home');
        }
        

    }
}

export default NewProfesionalController;