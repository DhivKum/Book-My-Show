import axiosInstance from './index';

export const RegisterUser = async (values) => {
    try{
        const response = await axiosInstance.post('/api/users/register', values);
    // console.log("User registered successfully"); 
    return response.data;
    }
    catch (error)
    {
        console.error("Error:", error);
        console.log("User already exists");
        // Re-throw the error for handling in the calling function
    }
}

export const LoginUser = async (values) => {
    try {
        const response = await axiosInstance.post('/api/users/login', values);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        console.log("Login failed");
        // Re-throw the error for handling in the calling function
    }
}

