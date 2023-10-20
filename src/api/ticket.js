import instance from ".";

export async function getTicketById(ticketId, token) {
  try {
    const { data } = await instance.get(`/tickets/${ticketId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      isOk: true,
      data,
      message: "",
    };
  } catch (error) {
    token;
    console.log(error.response.data);
    return {
      isOk: false,
      data: null,
      message: error?.response?.data?.detail || error.message,
    };
  }
}

export async function getTicketsByUser(userId, token) {
  try {
    const { data } = await instance.get(`/tickets/user/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      isOk: true,
      data,
      message: data?.message,
    };
  } catch (error) {
    token;
    console.log(error.response.data);
    return {
      isOk: false,
      data: null,
      message: error?.response?.data?.detail || error.message,
    };
  }
}

export async function deleteTicketById(ticketId, token) {
  try {
    const { data } = await instance.delete(`/tickets/${ticketId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      isOk: true,
      data,
      message: data?.message || "",
    };
  } catch (error) {
    token;
    console.log(error.response.data);
    return {
      isOk: false,
      data: null,
      message: error?.response?.data?.detail || error.message,
    };
  }
}
