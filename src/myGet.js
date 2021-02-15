// import fetch from "isomorphic-unfetch";
import Router from "next/router";
const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
export const myGet = async (url, ctx, cookie) => {
  const resp = await fetch(url, {
    headers: {
      cookie: cookie,
    },
  });
  if (resp.status === 401 && !ctx.req) {
    Router.replace("/admin/login");
    return {};
  }
  if (resp.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: `${Base_Url}/admin/login`,
    });
    ctx.res.end();
    return;
  }
  const json = await resp.json();
  return json;
};
