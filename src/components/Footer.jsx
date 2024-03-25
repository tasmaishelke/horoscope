import './footer.css'

function Footer()
{
    return(
        <footer className="class-footer">
            <p className="class-copyright">
            &copy; ABCOM Website,Inc.{new Date().getFullYear()}.All rights reserved
            </p>
            <p className='class-disclaimer'> 
            When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
            </p>
        </footer>
    );
}

export default Footer