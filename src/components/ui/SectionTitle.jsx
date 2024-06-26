import Container from "@/components/layout/Container";


const SectionTitle = (props) => {
    return (
        <div id={props.id}>
            <Container
                className={`flex w-full flex-col mt-4 items-center justify-center text-center`}>

                {props.pretitle && (
                    <div className="text-lg font-bold tracking-wider text-indigo-600 uppercase">
                        {props.pretitle}
                    </div>
                )}

                {props.title && (
                    <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4x">
                        {props.title}
                    </h2>
                )}

                {props.children && (
                    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
                        {props.children}
                    </p>
                )}
            </Container>
        </div>

    );
}

export default SectionTitle;