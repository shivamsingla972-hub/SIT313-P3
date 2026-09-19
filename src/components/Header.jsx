function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1>DEV@Deakin</h1>

                <nav>
                    <a href="#articles">Articles</a>
                    <a href="#tutorials">Tutorials</a>
                    <a href="#about">About</a>
                </nav>

                <div className="header-buttons">
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;