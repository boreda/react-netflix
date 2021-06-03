import React, {createContext, useState, useContext} from 'react'

const ToggleContext = createContext();

export default function Accordion({children, ...restProps}){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Header = function AccordionHeader({children, ...restProps}){
    return <Header onClick={()=>setToggleShow()} {...restProps}>{children}</Header>
}

Accordion.Item = function AccordionItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);
    return <Item {...restProps}>{children}</Item>
}