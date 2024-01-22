import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
})

export default SignInSchema; 