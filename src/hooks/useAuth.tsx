const useAuth = () => {
  const auth = localStorage.getItem("auth");

  return auth === "true";
};

export default useAuth;
