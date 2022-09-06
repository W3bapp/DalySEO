import React, { useRef } from 'react'
import styled from '@emotion/styled'

const InputWrapper = styled(`textarea`)`
          color:${props => props.theme.fonts.title}; 
`;

function TextArea(props) {
    const placeholderRef = useRef(null);
    const {hidden, textArea, placeholder, label, className, button, action, ...rest} = props;

    return (
        <div className={`input-container margin-bottom-small`}>
            <label className={`input-label`}>{label}</label>
            <InputWrapper {...rest} ref={placeholderRef}
                          onFocus={() => placeholderRef.current.placeholder = " "}
                          placeholder={placeholder}
                          onBlur={() => placeholderRef.current.placeholder = placeholder}/>
        </div>
    );
}

export default TextArea;

