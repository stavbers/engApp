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
                    <AccordionItemButton>
                        ENG
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {generExaple(exempleEn)}
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
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