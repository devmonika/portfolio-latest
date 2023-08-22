/* eslint-disable react/no-unescaped-entities */
import com from '../../Comp 1.json';
import Lottie from'lottie-react';

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="text-5xl font-bold text-[#25729D] text-center mb-5 mt-24">Let's Talk</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex justify-center">
                    <Lottie className='h-screen w-full' animationData={com}/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Message..."></textarea>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#25729D] text-white">Send</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;