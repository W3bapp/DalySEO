import React from 'react';

function Section({children, className, id, ...props}) {
    return (
        <section id={id} className={`section ${className ? className : ""}`} {...props}>
                {children}
        </section>
    );
}

export default Section;
