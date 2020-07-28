import axios from "axios";

export default {
    getProjects(filter)
    {
        if(filter)
            return axios.get(`/project/${filter}`);
        return axios.get("/project");
    }

} 