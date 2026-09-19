function Footer() {
    return (
        <footer className="footer" id="about">
            <div className="newsletter">
                <strong>SIGN UP FOR OUR DAILY INSIDER</strong>

                <div>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="footer-content">
                <div>
                    <h3>Explore</h3>
                    <a href="#">Home</a>
                    <a href="#articles">Questions</a>
                    <a href="#articles">Articles</a>
                    <a href="#tutorials">Tutorials</a>
                </div>

                <div>
                    <h3>Support</h3>
                    <a href="#">FAQs</a>
                    <a href="#">Help</a>
                    <a href="#">Contact Us</a>
                </div>

                <div>
                    <h3>Stay Connected</h3>
                    <div className="social">
                        <span>f</span>
                        <span>𝕏</span>
                        <span>◎</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <strong>DEV@Deakin</strong>

                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Code of Conduct</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;