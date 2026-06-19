import React from 'react';

const About = (props) => {

    const textColor =
        props.theme === '#86efac' ||
            props.theme === '#fdba74' ||
            props.theme === '#7dd3fc' ||
            props.theme === '#f9a8d4' ||
            props.theme === 'white'
            ? 'black'
            : 'white';

    const myStyle = {
        backgroundColor: props.theme,
        color: textColor
    };

    const headingStyle = {
        color: '#a6073c',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textShadow: '2px 2px 5px rgba(0,0,0,0.35)'
    };

    const strongStyle = {
        color: '#1ea607',
        fontWeight: 'bold',
        textShadow: '2px 2px 5px rgba(0,0,0,0.35)'
    };

    return (
        <div className="container my-3">

            <h1
                style={{
                    fontFamily: 'Kaushan Script, cursive',
                    color: '#E61C69',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
            >
                About TextUtils
            </h1>

            <div className="accordion" id="accordionExample">

                {/* Accordion 1 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            style={{
                                ...myStyle,
                                ...headingStyle
                            }}
                        >
                            Analyze Your Text
                        </button>
                    </h2>

                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong style={strongStyle}>
                                Analyze Your Text:
                            </strong>{' '}
                            TextUtils provides powerful text analysis tools. You can convert text to uppercase, lowercase, capitalize case, sentence case, remove extra spaces, reverse text, copy text, and perform many other useful operations instantly.
                        </div>
                    </div>
                </div>

                {/* Accordion 2 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            style={{
                                ...myStyle,
                                ...headingStyle
                            }}
                        >
                            Free To Use
                        </button>
                    </h2>

                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong style={strongStyle}>
                                Free To Use:
                            </strong>{' '}
                            TextUtils is completely free to use. No registration or subscription is required. Just enter your text and start using the tools instantly.
                        </div>
                    </div>
                </div>

                {/* Accordion 3 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            style={{
                                ...myStyle,
                                ...headingStyle
                            }}
                        >
                            Browser Compatible
                        </button>
                    </h2>

                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            <strong style={strongStyle}>
                                Browser Compatible:
                            </strong>{' '}
                            TextUtils works smoothly across modern browsers and devices. Built with React and Bootstrap, it provides a fast, responsive, and user-friendly experience.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;