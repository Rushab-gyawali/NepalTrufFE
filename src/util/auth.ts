export const getAuthData = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return {user };
  };