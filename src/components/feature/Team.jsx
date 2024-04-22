import Image from "next/image"
import Container from "../layout/Container"

const Team = ({ data = [] }) => {
    return (
        <Container>
            <div className="space-y-6 md:space-y-12">
                {
                    data.map((person) =>
                        <div key={person.name} className="md:flex gap-10 pb-6 md:pb-12 pt-[10px] md:pt-[1px] border-b-[1px] md:tracking-wide">
                            <div className=" md:w-1/3 lg:w-1/4">
                                <Image src={person.src} className="object-cover max-w-[150px] md:max-w-full rounded-lg shadow-lg" alt='teacher' />
                            </div>

                            <div className="mt-10 md:mt-2 md:w-2/3 lg:w-3/4">
                                <h3 className="text-2xl font-medium leading-6 mb-3 text-slate-700">{person.name}</h3>

                                <p className="text-gray-500 mt-5 leading-loose text-lg">{person.bio}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </Container>
    )
}

export default Team