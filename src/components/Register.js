import react from 'react';

const Register = () => {
    return (
        <form action="/user/signup" onSubmit={handleSubmit}>
            <input placeHolder="Name" name="name"/>
            <input placeHolder="Name" name="name"/>
            <input placeHolder="Name" name="name"/>
            <button type="submit"></button>
        </form>
        
    )
}