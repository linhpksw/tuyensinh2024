import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Container from '@/components/layout/Container'
import CardQA from '@/components/feature/CardQA'
import { mathBook } from "@/lib/data"


const AccordionQA = ({ data }) => {
    return (
        <Container className="flex justify-center">
            <Accordion className='w-[45rem]' type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Học sinh cần chuẩn bị gì cho kì thi đầu vào?</AccordionTrigger>
                    <AccordionContent>
                        Trung tâm gợi ý một số tài liệu để học sinh ôn luyện trước kì thi.

                        <CardQA data={mathBook.c2} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Container>

    )
}

export default AccordionQA