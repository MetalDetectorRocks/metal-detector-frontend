import {configure} from 'axios-hooks'
import Axios from 'axios'
import {PathLike} from "fs";
import qs from 'qs';

export function configureAxios() {
  const axios = Axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: false,
    timeout: 60000,
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, {indices: false}),
  });

  configure({
    axios: axios,
    defaultOptions: {
      manual: true,
      useCache: false,
      ssr: false,
      autoCancel: false
    }
  });
}