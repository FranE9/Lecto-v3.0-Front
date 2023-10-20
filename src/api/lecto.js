import instance from ".";

export async function sendText(body, token) {
  try {
    const { data } = await instance.post("/lecto/text", body, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      isOk: true,
      data,
      message: "",
    };
  } catch (error) {token
    console.log(error.response.data);
    return {
      isOk: false,
      data: null,
      message: error?.response?.data?.detail || error.message,
    };
  }
}

export async function sendFile(body, token) {
    try {
        const { data } = await instance.post("/lecto/pdf", body, {
          headers: {
            "authorization": `Bearer ${token}`
          }
        });
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
