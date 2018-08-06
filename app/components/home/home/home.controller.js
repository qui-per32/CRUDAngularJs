class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
        this.getData();
    }

    getData() {
        console.log("Entra en getdata");
        this.homeService.getData()
            .then(resultado => {
                console.log(resultado);
                
                this.dataResult = resultado;
                console.log(JSON.stringify(this.dataResult));
            });
    }
}

export default HomeController;