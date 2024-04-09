<script setup>
import { ref, watch, computed } from "vue";
import IconPasscode from "@/components/icons/IconPasscode.vue";
import IconGoIn from "@/components/icons/IconGoIn.vue";
import IconInfo from "@/components/icons/IconInfo.vue";
import IconClose from "@/components/icons/IconClose.vue";
import EmblemDark from "@/assets/ee265765-b65e-4677-8f5c-34c93e59c83f.jpeg";
import { useRouter } from "vue-router";
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { useMainStore } from '@/stores/index';
import { verifyOtp } from "@/services/userService";

const showNotification = ref(true);
const hideNotification = () => showNotification.value = false;
const { data } = useMainStore();
const accessToken = computed(() => data.accessToken);
const router = useRouter();

const schema = toTypedSchema(
        object({
            otp: string().required('Otp field is required').min(6, 'At least 6 characters'),
        }),
    );

const { values, errors, setFieldValue, isSubmitting, handleSubmit } = useForm({
  initialValues: {
    otp: '123456789012',
  },
  validationSchema: schema,
});

const handleChange = (e) => setFieldValue(e.target.name, e.target.value);
const onSubmit = handleSubmit(values => verifyOtp(values));

watch(accessToken, () => {
    router.push('/app/map')
});

</script>

<template>
<form @submit.prevent="onSubmit" class="space-y-1">
    <div class=" bg-center bg-cover h-40 w-40 mx-auto" :style="{ backgroundImage: `url(${EmblemDark})` }"></div>
    <div v-if="showNotification" class="flex w-52 p-4 bg-blue-400 text-sm text-white rounded-sm relative">
        <div @click="hideNotification" class="flex cursor-pointer justify-center items-center p-1 absolute bg-white rounded-full w-5 h-5 right-1 top-1">
            <IconClose class="w-3 h-3 text-black" />
        </div>
        <p>
            <IconInfo class="w-6 h-6 inline-block" />
            Unauthorized access is strictly prohibited. One time password protected access.
        </p>
    </div>
    <div class="relative mb-3">
        <input type="text" 
            @change="handleChange" 
            :value="values.otp" 
            name="otp" 
            class=" pl-8 py-1 bg-slate-200 rounded-sm focus:outline-none w-full" 
            placeholder="One Time Password"
        >
        <IconPasscode classProps="absolute w-6 h-6 m-1 top-0" />
    </div>
    <p v-if="errors.otp" class="text-red-400 text-xs">{{ errors.otp }}</p>
    <button type="submit" class="flex justify-center items-center w-full text-sm text-white bg-blue-500 shadow-sm rounded-sm p-1" :disabled="isSubmitting">
        <svg v-if="isSubmitting" class="animate-spin h-5 w-5 mr-3 border-2 border-x-white border-blue-500 block rounded-full" viewBox="0 0 24 24"></svg>
        <span class="mr-2">Unlock</span>
        <IconGoIn />
    </button>
</form>
</template>