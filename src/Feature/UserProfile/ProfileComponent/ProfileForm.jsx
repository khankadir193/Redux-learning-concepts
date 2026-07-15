import { useState } from 'react';
import './profileStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { resetProfile, updateProfile } from '../ProfileSlice/profileSlice';

const ProfileComponent = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        age: ''
    });
    const dispatch = useDispatch();
    const stateValue = useSelector((state) => state.profileData.profile);
    console.log('state Value', stateValue)
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateProfile(formState));
        setFormState({ name: '', email: '', age: '' });
    };

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(resetProfile());
        setFormState({ name: '', email: '', age: '' });
    };

    return (
        <form className="form-container">
            <input type="text" placeholder="enter your userName" onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))} />
            <input type="email" placeholder="enter your email" onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))} />
            <input type="number" placeholder="enter your age" onChange={(e) => setFormState((prev) => ({ ...prev, age: e.target.value }))} />
            <div className='btn-container'>
                <button onClick={handleUpdate}>Update Profile</button>
                <button>Reset Profile</button>
            </div>
            {(stateValue.name || stateValue.email || stateValue.age) &&
                <div className='text-content'>
                    <span>{stateValue.name}</span>
                    <span>{stateValue.email}</span>
                    <span>{stateValue.age}</span>
                </div>}
        </form>
    )
};
export default ProfileComponent;