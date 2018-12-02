import React from 'react';
import Menu from './menu.png';
import './navbar.css';

class Navbar extends React.Component {



    constructor() {
        super();

        this.state = {
            showMenu: false
        }
    }

    showMenu = () => {
        if (!this.state.showMenu) {
            this.setState({ showMenu: true });
        } else {
            this.setState({ showMenu: false });
        }

    }

    //Close menu and change page
    handleMenuCall = (string) => {
        const {onRouteChange} = this.props;
        this.showMenu();
        onRouteChange(string);
    }

    render() {
        // const {onRouteChange} = this.props;
        return (
            <div className="navbarContainer">
                <div className="navBanner">
                    <div className="topBar">
                        <h1>Axion.com</h1>
                    </div>
                    <img onClick={this.showMenu} className="menuImg" src={Menu} alt="menu"></img>
                </div>

                {this.state.showMenu
                    ? (
                        <div className="dropdown">
                            <li onClick={() => this.handleMenuCall('landing')}>Home</li>
                            <li onClick={() => this.handleMenuCall('cv')}>About Me</li>
                            <li onClick={() => this.handleMenuCall('blog')}>Blog</li>
                        </div>
                    )
                    : (null)}



            </div>




        );
    }
}





export default Navbar;