import axios from "axios";
import qs from "qs";

export const API = {
  GET_USER_LIST: { url: `user/test`, method: "post" },
}
export const AJAX = (methodApi, queryParam = {}, proxyKey) => {
  let options = Object.assign({
      emulateJSON: false
    },
    methodApi
  );

  // var t = (new Date()).valueOf();
  if (methodApi.method.toLowerCase() === "get") {
    let par = "?";
    for (let item in queryParam) {
      par += item + "=" + queryParam[item] + "&";
    }
    options.url += par;
  } else {
    options.data = qs.stringify(queryParam);
  }

  // 代理配置key
  proxyKey = proxyKey || "manage";

  if (options.url !== "/cfgateway/login/loginByAccount") {
    if (process.env.NODE_ENV === "development") {
      options.url = "/" + proxyKey + "/" + options.url;
    } else {
      options.url = "/" + options.url;
    }
  }
  console.log(options);
  console.log(123)
  return new Promise((resolve, reject) => {
    axios(options).then(res => {
      if (res.status >= 200 && res.status < 300) {
        resolve(res.data);
      } else {
        reject(new Error(res.status));
      }
    });
  });
};
