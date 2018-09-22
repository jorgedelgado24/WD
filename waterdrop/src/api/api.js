import axios from "axios";

export default {
    getEmpresas: function() {
      return axios.get(process.env.REACT_APP_API_URL + "/api/agendarcita");
    },
    getFechasNot: function(empresa) {
      return axios.get(process.env.REACT_APP_API_URL + "/api/agendarcita/" + empresa);
    },
    getHorarios: function(empresa, fecha) {
        return axios.get(process.env.REACT_APP_API_URL + "/api/agendarcita/" + empresa +"/" + fecha);
    },
  };