import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Container from '@/components/layout/Container'
import CardQA from '@/components/feature/CardQA'

const AccordionQA = ({ data }) => {
    return (
        <Container className="flex justify-center">
            <Accordion className='w-[45rem]' type="single" collapsible>
                {data.items.map((item, index) => (
                    <AccordionItem key={index} value={item.id}>
                        <AccordionTrigger>
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer}

                            {item.id === 1 && <CardQA data={data.mathBook} />}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Container>

    )
}

export default AccordionQA