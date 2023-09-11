const urlBase = "http://localhost:3031";
export const post = async ({ url, values }: { url: string; values: any }) => {
  const response = await fetch(`${urlBase}${url}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(values),
  });
  return await response.json();
};

export const get = async ({ url, value }: { url: string; value?: any }) => {
  const res = await fetch(`${urlBase}${url}/${value || ""}`);
  return await res.json();
};

export const put = async ({ url, values }: { url: string; values: any }) => {
  const response = await fetch(`${urlBase}${url}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(values),
  });
  return await response.json();
};

export const deleted = async ({ url }: { url: string }) => {
  return await fetch(`${urlBase}${url}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });
};
