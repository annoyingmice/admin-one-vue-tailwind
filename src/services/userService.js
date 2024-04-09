import axios from "@/axios";
import { useMainStore, useErrorStore } from '@/stores/index';

const { setAccessToken } = useMainStore();
const { setError } = useErrorStore();

export const verifyOtp = (values) => 
    axios.post("/verify", values)
        .then(
            (response) => 
                setAccessToken(response.data.data.access_token)
        )
        .catch(
            (error) => 
                setError(error.response.data.data.message)
        );