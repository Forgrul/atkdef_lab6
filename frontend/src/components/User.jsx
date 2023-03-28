import services from "../services";
services.user.getAll().then((data) => {
    console.log(data);
}); 