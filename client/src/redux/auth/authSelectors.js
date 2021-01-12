const isAuthenticated = state => state.auth.isLogin;
const error = state => state.auth.error;
// eslint-disable-next-line import/no-anonymous-default-export
export default { isAuthenticated, error };
