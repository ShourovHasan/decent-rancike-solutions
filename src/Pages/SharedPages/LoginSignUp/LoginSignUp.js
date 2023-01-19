import React from 'react';
import login_Img from '../../../assets/decent_edu_side_img.png';
import useTitle from '../../../hooks/useTitle';
import EducationForm from '../../EducationForm/EducationForm';
import './LoginSignUp.css';


const LoginSignUp = () => {
    useTitle('Login/Register');
    return (
        <div className='max-w-[1529] mx-5'>
            <div className="content_border_color card lg:card-side bg-base-100 lg:px-[58px] w-full">
                <div className="lg:w-1/3 card-body border_right">
                    
                    <EducationForm></EducationForm>
                    {/* <div className="justify-end card-actions">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                </div>
                <div className='flex items-center justify-center lg:w-2/3'>
                    <figure>
                        <img className='max-w-[789px] max-h-[879px]' src={login_Img} alt="decent_login" />
                    </figure>
                </div>
                
            </div>
        </div>
    );
};

export default LoginSignUp;