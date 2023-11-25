function Registration() {
    return (
        <div>
            <div className="title">
                <h1>Registration</h1>
            </div>
            <div className="form">
                <form>
                    <label htmlFor="">Profile picture : </label>
                    <input type="file" name="profile_picture" /><br /> <br />

                    <label htmlFor="">Email : </label>
                    <input type="email" name="email" /><br />

                    <label htmlFor="">Password : </label>
                    <input type="password" name="password" /><br />

                    <label htmlFor="">Confirm password : </label>
                    <input type="password" name="confirm_password" /><br />

                    <button type="submit">Registration</button><br />
                    <a href="/forgot-password">Click here to forgot your password</a><br />
                    <a href="/login">Click here if you have an account</a>
                </form>
            </div>
        </div>
    )
};

export default Registration