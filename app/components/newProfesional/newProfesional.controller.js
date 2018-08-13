class NewProfesionalController {
    constructor(dataService) {

        this.dataService = dataService;
        this.newUser = [];
    }

    createNewUser(form) {
        console.log(form);
        
        if (form.nombre.$invalid === true || form.primerApellido.$invalid === true || form.numerocolegiado.$invalid == true) {
            console.log(form.nombre.$invalid);
            console.log(form.primerApellido.$invalid);
            console.log(form.numerocolegiado.$invalid);
            
            return;

        }

        this.newUser.tipo = 'profesional';
        this.dataService.newUser(this.newUser);

    }
}

export default NewProfesionalController;