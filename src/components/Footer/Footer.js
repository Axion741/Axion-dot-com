import React from 'react';

const Footer = () => {

    return (
        <div className="FooterContainer">
            <a className="link dim gray dib h3 w3 br-100 mr3 pa2 bg-near-white ba b--black-10" href="https://www.linkedin.com/in/kyleballagher/" title="">
                <svg data-icon="linkedin" viewBox="0 0 24 24" style={{}}>
                    <title>linkedin icon</title>
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"></path>
                </svg>
            </a>

            <a className="link dim gray dib br-100 h3 w3 mr3 pa2 bg-near-white ba b--black-10" href="https://github.com/Axion741" title="">
                <svg data-icon="github" viewBox="0 0 32 32" style={{}}>
                    <title>github icon</title>
                    <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
                </svg>
            </a>

                        <a className="link dim gray dib h3 w3 br-100 mr3 pa2 bg-near-white ba b--black-10" href="https://twitter.com/KyleBallagher" title="">
                <svg data-icon="twitter" viewBox="0 0 32 32" style={{}}>
                    <title>twitter icon</title>
                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
                </svg>
            </a>

        </div>
    )


}

export default Footer;