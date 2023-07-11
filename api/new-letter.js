import axios from "axios";
import { host } from "../config/fetch";

export const fetchNewLetter = ({ first_name, email_address, client_scope }) => {
  axios.post(`${host}/newsletter`, {
    first_name,
    email_address,
    client_scope: 'webapp01'
  });
};
