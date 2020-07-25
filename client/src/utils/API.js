import axios from "axios";

export default {
    getProjects(filter)
    {
        if(filter)
            return axios.get(`/portfolio/${filter}`);
        return axios.get("/portfolio");
    }

} 