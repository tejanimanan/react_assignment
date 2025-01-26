import React, { useState } from 'react';

const Q2 = () => {
    const [age, setAge] = useState(null);

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const isEligible = age >= 18;

    return (
        <div className="container  mt-5">
            <div className='row  justify-content-center'>
                <div className='col-lg-6'>
                    <div className='Card shadow p-3 '>
                        <div className='Card-body'>
                            <h5 className="card-title text-start my-3 pb-3">Voting Eligibility</h5>
                            <input
                                type="number"
                                className="form-control  mb-3"
                                placeholder="Enter your age"
                                value={age}
                                onChange={handleAgeChange}
                            />
                            {age === null ? (
                                <p className="text-dark text-start">Please enter your age to check eligibility.</p>
                            ) : isEligible ? (
                                <p className="text-success text-start">You are eligible to vote.</p>
                            ) : (
                                <p className="text-danger text-start">You are not eligible to vote.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Q2;
