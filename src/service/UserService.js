import axios from "axios";

export default class UserService {

    url = "http://localhost:8082/users";

    getAll() {
        return axios.get(this.url);
    }

    save(user){
        return axios.post(this.url, user);
    }

    delete(userId){
        return axios.delete(this.url + "/" + userId);
    }
}