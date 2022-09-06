import React, {useRef} from 'react';
import styled from '@emotion/styled'
import Animation from '@/animation/Animation'
import Section from '@/layout/Section'

const InputWrapper = styled(`input`)`
          color:${props => props.theme.fonts.title}; 
`;

function Input(props) {
    const placeholderRef = useRef(null);
    const {hidden, textArea, placeholder, label, className, button, action, key, ...rest} = props;

    return (

        <div className={`input-container`}>
            {label && <label className={`input-label`}>{label}</label>}
            <InputWrapper key={key} {...rest} ref={placeholderRef}
                          onFocus={() => placeholderRef.current.placeholder = " "}
                          placeholder={placeholder}
                          onBlur={() => placeholderRef.current.placeholder = placeholder}/>
        </div>
    );
}

export default Input;

