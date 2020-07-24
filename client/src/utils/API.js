import axios from "axios";

export default {
    getProjects()
    {
        return axios.get("/portfolio");
    },
    filterProjects(filter)
    {
        return axios.get(`/portfolio/${filter}`);
    }

} 