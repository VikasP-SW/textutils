import React from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from "react-router-dom";
const Navbar = (props) => {

    const textColor =
        props.theme === 'yellow' ||
            props.theme === 'gold' ||
            props.theme === 'white'
            ? 'black'
            : 'white';

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg navbar-${props.mode}`}
                style={{
                    backgroundColor: props.theme,
                    color: '#E61C69',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
            >
                <div className="container-fluid">

                    <a
                        className="navbar-brand"
                        href="/"
                        style={{
                            fontFamily: 'Kaushan Script, cursive',
                            fontSize: '2rem',
                            color: '#E61C69',
                            textDecoration: 'none'
                        }}
                    >
                        {props.title}
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span
                            className="navbar-toggler-icon"
                            style={{
                                filter:
                                    props.mode === 'dark'
                                        ? 'invert(1)'
                                        : 'invert(0)'
                            }}
                        ></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >

                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">

    <li className="nav-item">
        <a
    className="nav-link active"
    aria-current="page"
    href="/"
    style={{ color: textColor }}
>
    Home
</a>
    </li>

    {/* <li className="nav-item">
        <a
            className="nav-link"
            href="/about"
            style={{ color: textColor }}
        >
            About
        </a>
    </li> */}

</ul>

                        {/* Theme Switches */}

                        <div className="form-check form-switch mx-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() => props.setThemeColor('#fb7185')}
                                id="roseSwitch"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="roseSwitch"
                                style={{ color: textColor }}
                            >
                                Rose
                            </label>
                        </div>

                        <div className="form-check form-switch mx-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() => props.setThemeColor('#f9a8d4')}
                                id="pinkSwitch"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="pinkSwitch"
                                style={{ color: textColor }}
                            >
                                Pink
                            </label>
                        </div>

                        <div className="form-check form-switch mx-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() => props.setThemeColor('#7dd3fc')}
                                id="skySwitch"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="skySwitch"
                                style={{ color: textColor }}
                            >
                                Sky
                            </label>
                        </div>

                        <div className="form-check form-switch mx-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() => props.setThemeColor('#c084fc')}
                                id="purpleSwitch"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="purpleSwitch"
                                style={{ color: textColor }}
                            >
                                Purple
                            </label>
                        </div>

                        <div className="form-check form-switch mx-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() => props.setThemeColor('#86efac')}
                                id="mintSwitch"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="mintSwitch"
                                style={{ color: textColor }}
                            >
                                Mint
                            </label>
                        </div>

                        <div className="form-check form-switch mx-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() => props.setThemeColor('#fdba74')}
                                id="peachSwitch"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="peachSwitch"
                                style={{ color: textColor }}
                            >
                                Peach
                            </label>
                        </div>

                        <div className="form-check form-switch mx-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={props.toggleMode}
                                id="darkModeSwitch"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="darkModeSwitch"
                                style={{ color: textColor }}
                            >
                                Dark
                            </label>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string,
// };

// Navbar.defaultProps = {
//     title: 'TextUtils',
//     aboutText: 'About',
// };

export default Navbar;