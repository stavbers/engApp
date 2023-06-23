import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Accord(props) {
    const {generExaple, exempleEn, exempleRu} = props
    
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accord-btn'>
                        ENG
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {generExaple(exempleEn)}
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accord-btn'>
                       RUS
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                {generExaple(exempleRu)}
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}