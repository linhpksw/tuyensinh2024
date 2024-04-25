import Container from '@/components/layout/Container'
import { PhoneIcon } from '@heroicons/react/24/outline'

const TimeTable = ({ data = [] }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Container>
            {data.map((parentElement, parentId) => (
                <div key={parentElement.no}
                    className={classNames(parentId !== data.length - 1 ? 'mb-12' : '',
                        'lg:px-8'
                    )}
                >
                    <div className="lg:flex lg:justify-between lg:items-center">

                        <div className="sm:flex-auto mb-4 lg:mb-0">
                            <h1 className="text-2xl font-semibold text-gray-900">{parentElement.grade}</h1>
                            <p className="mt-2 text-md text-red-600">
                                {parentElement.opening}
                            </p>
                        </div>

                        {/* Liên hệ cô giáo */}
                        <div>
                            <a href={'tel:' + parentElement.phone} className="inline-flex items-center justify-center p-3 font-medium text-gray-500 rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100">
                                <PhoneIcon className="h-6 w-6 mr-2 text-blue-500" />

                                <span className="w-full whitespace-nowrap">{parentElement.contact}</span>

                                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>

                    </div>

                    <div className="mt-8 shadow-sm ring-1 ring-black ring-opacity-5">
                        <table className="table min-w-full border-separate" style={{ borderSpacing: 0 }}>
                            <thead className="bg-gray-50 table-header-group">
                                <tr className='table-row'>
                                    {/* Mon hoc */}
                                    <th
                                        scope="col"
                                        className="table-cell  top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 p-3.5 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter "
                                    >
                                        Môn học
                                    </th>
                                    {/* Giao vien */}
                                    <th
                                        scope="col"
                                        className="table-cell  top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 p-3.5 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                    >
                                        Giáo viên
                                    </th>
                                    {/* Thoi gian */}
                                    <th
                                        scope="col"
                                        className="table-cell  top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 p-3.5 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                    >
                                        Thời gian
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white table-row-group">
                                {parentElement.child.map((person, personIdx) => (
                                    <tr className='table-row' key={person.teacher}>
                                        {/* Mon hoc */}
                                        <td
                                            className={classNames(
                                                personIdx !== parentElement.child.length - 1 ? 'border-b border-gray-200' : '',
                                                ' p-3.5  text-gray-500 table-cell'
                                            )}
                                        >
                                            {person.subject}
                                        </td>
                                        {/* Giao vien */}
                                        <td
                                            className={classNames(
                                                personIdx !== parentElement.child.length - 1 ? 'border-b border-gray-200' : '',
                                                'p-3.5  text-gray-500  table-cell'
                                            )}
                                        >
                                            {person.teacher}
                                        </td>
                                        {/* Thoi gian */}
                                        <td
                                            className={classNames(
                                                personIdx !== parentElement.child.length - 1 ? 'border-b border-gray-200' : '',
                                                'p-3.5 text-gray-500 table-cell'
                                            )}
                                        >
                                            {person.time}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </Container>
    )
}

export default TimeTable