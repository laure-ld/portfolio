import '../styles/footer.scss';

function Footer() {
    return (
        <div className="footer">
            <p className="text-footer">À bientôt</p>
            <div className='link-footer'>
                <a href="mailto:contact@exemple.com" className="">Me contacter</a>
                <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="">
                    <img src="/images/link.png" alt="linkedin" className="" />
                </a>
                <a href="https://github.com/laure-ld" target="_blank" rel="noopener noreferrer" className="">
                    <img src="/images/github.png" alt="GitHub" className="" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
