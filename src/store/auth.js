import Axios from "axios";

const loginUrl = "http://localhost:3000/login";

export default {
    state: {
        authenticated: false,
        jwt: null,
    },
    mutations: {
        setAuthenticated(state, header) {
            state.jwt = header;
            state.authenticated = true;
        },
        clearAuthentication(state) {
            state.authenticated = false;
            state.jwt = null;
        }
    },
    actions: {
        async authenticate(context, credentials) {
            let response = await Axios.post(loginUrl, credentials);
            if (response.data.success == true) {
                context.commit("setAuthenticated", response.data.token);
            }
        }
    },
    getters: {
        authenticatedAxios(state) {
            return Axios.create({
                headers: {
                    "Authorization": `Bearer<${state.jwt}>`
                }
            });
        }
    }
}