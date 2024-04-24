import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Container from '@/components/layout/Container'
import Image from 'next/image'
import Link from 'next/link'


const CarouselFB = ({ data }) => {
    return (
        <Container className=''>
            <Carousel
                orientation="horizontal"
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className='-mt-1 h-[20rem]'>
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image
                                            alt={item.alt}
                                            className="aspect-square w-full rounded-md"
                                            height="512"
                                            src={item.src}
                                            width="512"
                                            quality={100}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />

                <div className='flex justify-center mt-10'>
                    <button
                        type='button'
                        className={`mx-auto max-w-max rounded-md border border-transparent bg-rose-500 px-5 py-3 font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10`}>
                        <Link href='https://www.facebook.com/groups/1404470336293968'>
                            Tham gia nhóm Facebook ngay hôm nay!
                        </Link>
                    </button>
                </div>
            </Carousel>




        </Container>
    )
}

export default CarouselFB