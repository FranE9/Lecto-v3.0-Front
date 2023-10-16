import instance from ".";

export async function sendText(body) {
  try {
    const { data } = await instance.post("/lecto/text", body);
    return {
      isOk: true,
      data,
      message: "",
    };
  } catch (error) {
    console.log(error.response.data);
    return {
      isOk: false,
      data: null,
      message: error?.response?.data?.detail || error.message,
    };
  }
}

export async function sendFile(body) {
    try {
        const { data } = await instance.post("/lecto/pdf", body);
        return {
          isOk: true,
          data,
          message: "",
        };
      } catch (error) {
        console.log(error.response.data);
        return {
          isOk: false,
          data: null,
          message: error?.response?.data?.detail || error.message,
        };
      }
}
