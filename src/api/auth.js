import instance from ".";

export async function login(credentials) {
  try {
    const { data } = await instance.post("/auth/login", credentials);
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

export async function register(user) {
  try {
    const { data } = await instance.post("/auth/register", user);
    return {
      isOk: true,
      data,
      message: "",
    };
  } catch (error) {
    return {
      isOk: false,
      data: null,
      message: error?.response?.data?.detail || error.message,
    };
  }
}
