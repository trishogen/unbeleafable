export const HEADERS = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${localStorage.token}`
}

export const parseResp = (resp) => {
  return resp.json().then(json => ({
    status: resp.status,
    json
  }))
}
