export default function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <p>Welcome back! Please log in to continue.</p>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
}