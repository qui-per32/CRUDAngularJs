class CreateUserController {
    constructor(dataService) {
        this.dataService = dataService;
        this.newUser = [];
    }

    createNewUser(form) {
        console.log(form);
               
      if (form.nombre.$invalid === true || form.primerApellido.$invalid === true || form.nhc.$invalid == true) {
          console.log(form.nombre.$invalid);
          console.log(form.primerApellido.$invalid);
          console.log(form.nhc.$invalid);
          return;
          
      }
      
        this.newUser.tipo = 'paciente';
        this.dataService.newUser(this.newUser);

    }
}

export default CreateUserController;