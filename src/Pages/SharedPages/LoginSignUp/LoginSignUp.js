import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login_Img from '../../../assets/decent_edu_side_img.png';
import useTitle from '../../../hooks/useTitle';
// import EducationForm from '../../EducationForm/EducationForm';
import './LoginSignUp.css';


const LoginSignUp = () => {
    useTitle('Login/Register');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div className='max-w-[1529] mx-5'>
            <div className="content_border_color card lg:card-side lg:px-[58px] w-full">
                <div className="w-full lg:w-1/3 card-body border_right">
                    <h2 className="card-title header_content">Education <span className='text-red-500'>*</span></h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-8' >
                        <div className="w-full mb-2 form-control">
                            <label className="label">
                                <span className="label-text input_title">Year of passing <span className='text-red-500'>*</span></span>
                            </label>
                            <input {...register("yearOfPassing", {
                                required: "year of passing is required",
                                minLength: { value: 2, message: 'year of passing at least 2 number' },
                                maxLength: { value: 100, message: 'year of passing at most 100 number' }
                            })} type="number" placeholder="2024" className="w-full input input-bordered input_field" />
                            <label className="label">
                                <span className="label-text-alt">
                                    {errors.yearOfPassing && <p role="alert" className='ml-4 text-red-500'>{errors.yearOfPassing?.message}</p>}
                                </span>
                                <span className="label-text-alt color_gray">0/100</span>
                            </label>

                        </div>
                        <div className="w-full form-control ">
                            <label className="label">
                                <span className="label-text input_title">Region <span className='text-red-500'>*</span></span>
                            </label>
                            <input {...register("region", {
                                required: "region is required",
                                minLength: { value: 1, message: 'region is required' },
                                maxLength: { value: 100, message: 'region is at most 100 characters' }
                            })} type="text" placeholder="Jalandhar" className="w-full input input-bordered input_field" />
                            <label className="label">
                                <span className="label-text-alt">
                                    {errors.region && <p role="alert" className='ml-4 text-red-500'>{errors.region?.message}</p>}
                                </span>
                                <span className="label-text-alt color_gray">0/100</span>
                            </label>
                        </div>
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text input_title">College Name <span className='text-red-500'>*</span></span>
                            </label>
                            <input  {...register("collegeName", {
                                required: "college name is required",
                                minLength: { value: 1, message: 'college name is required' },
                                maxLength: { value: 100, message: 'college name is at most 100 characters' }
                            })} type="text" placeholder="NIT Jalandhar" className="w-full input input-bordered input_field" />
                            <label className="label">
                                <span className="label-text-alt">
                                    {errors.collegeName && <p role="alert" className='ml-4 text-red-500'>{errors.collegeName?.message}</p>}
                                </span>
                                <span className="label-text-alt color_gray">0/100</span>
                            </label>
                        </div>
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text input_title">Describe College <span className='text-red-500'>*</span></span>
                                <Link to='/help' className="label-text-alt content_help_color">Need help?</Link>
                            </label>
                            <textarea  {...register("descriptionCollege", {
                                required: "describe college is required",
                                minLength: { value: 1, message: 'describe college is required' },
                                maxLength: { value: 200, message: 'describe college is at most 200 characters' }
                            })} type="text" placeholder="NITJ is a college of national importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ...." className="w-full h-56 textarea textarea-bordered input_field" />
                            <label className="label">
                                <span className="label-text-alt">
                                    {errors.descriptionCollege && <p role="alert" className='ml-4 text-red-500'>{errors.descriptionCollege?.message}</p>}
                                </span>
                                <span className="label-text-alt color_gray">0/200</span>
                            </label>
                        </div>
                        <button className='normal-case btn btn_generate'>Generate</button>
                    </form>
                </div>
                <div className='flex items-center justify-center w-full lg:w-2/3'>
                    <figure>
                        <img className='max-w-[789px] max-h-[879px]' src={login_Img} alt="decent_login" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;