const apiEndpointPrefix = "https://hacker-news.firebaseio.com/v0/";
const fileType = ".json";

export const fetchList = (list: string) =>
  fetch(`${apiEndpointPrefix}${list}${fileType}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Status code error: ${response.status}`);
    }
    return response.json();
  });

export const fetchItem = (itemId: number) =>
  fetch(`${apiEndpointPrefix}item/${itemId}${fileType}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Status code error: ${response.status}`);
    }
    return response.json();
  });

export const getUser = (user: string) =>
  fetch(`${apiEndpointPrefix}user/${user}${fileType}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Status code error: ${response.status}`);
    }
    return response.json();
  });
