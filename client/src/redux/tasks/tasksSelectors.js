const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getCurrentError = state => state.auth.error;

export default { isAuthenticated, getUserName, getCurrentError };
