import mutations from "@/store/auth/mutations";
import actions from "@/store/auth/actions";
import getters from "@/store/auth/getters"

export default {
    state() {
        return {
            userId: null,
            token: null,
            didAutoLogout: false
        };
    },
    mutations,
    actions,
    getters
}