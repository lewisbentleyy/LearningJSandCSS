import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Forms = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is required."),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords don't match"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-10 flex flex-col justify-center items-center [&>*]:text-center [&>*]:outline-none ">
                <input
                    type="text"
                    placeholder="Full name..."
                    {...register("fullName")}
                />
                <p className="text-red-600">{errors.fullName?.message}</p>
                <input
                    type="text"
                    placeholder="Email..."
                    {...register("email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
                <input
                    type="number"
                    placeholder="Age..."
                    {...register("age")}
                />
                <p className="text-red-600">{errors.age?.message}</p>
                <input
                    type="password"
                    placeholder="Password..."
                    {...register("password")}
                />
                <p className="text-red-600">{errors.password?.message}</p>
                <input
                    type="password"
                    placeholder="Confirm Password..."
                    {...register("confirmPassword")}
                />
                <p className="text-red-600">
                    {errors.confirmPassword?.message}
                </p>
                <input
                    type="submit"
                    className="transition-opacity hover:opacity-80 active:opacity-50 cursor-pointer px-5 bg-black text-white py-1 rounded-full mt-1"
                />
            </div>
        </form>
    );
};

export default Forms;
