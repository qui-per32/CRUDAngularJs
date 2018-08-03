class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
        this.getData();
    }

    getData() {
        console.log("Entra en JSON");
         this.homeService.getData()
            .then(resultado => {
                this.dataResult = resultado;
               // console.log(JSON.stringify(this.dataResult));
            });
    }
}

export default HomeController;