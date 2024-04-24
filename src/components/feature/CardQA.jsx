import Image from "next/image"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function CardQA({ data = { l7: [], l8: [] } }) {
    return (
        <Card className="overflow-hidden mt-4">
            <CardHeader>
                <CardTitle>Lớp 8 chuyên</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        {data.l7.map((item, index) => (
                            <button key={index}>
                                <Image
                                    alt="Product image"
                                    className="aspect-square w-full rounded-md object-cover"
                                    height="84"
                                    src={item.src}
                                    width="84"
                                    quality={100}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </CardContent>

            <CardHeader>
                <CardTitle>Lớp 9 chuyên</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        {data.l8.map((item, index) => (
                            <button key={index}>
                                <Image
                                    alt="Product image"
                                    className="aspect-square w-full rounded-md object-cover"
                                    height="84"
                                    src={item.src}
                                    width="84"
                                    quality={100}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
