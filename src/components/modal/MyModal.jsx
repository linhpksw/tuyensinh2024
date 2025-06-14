import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment, useEffect } from 'react';
import { UserIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { customAlphabet } from 'nanoid';
import { classOptions, schoolList } from '@/lib/data';

export default function MyModal({ onClose, registerPhone, data = null, onDataUpdated }) {
    const apiBase = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();
    const isEdit = Array.isArray(data);
    const initialCount = isEdit ? data.length : 1;

    const [isOpen, setIsOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [numStudents, setNumStudents] = useState(1);

    useEffect(() => {
        // reset to match incoming data if it changes
        if (isEdit) setNumStudents(data.length);
    }, [data, isEdit]);

    const handleNumStudentsChange = (e) => {
        const v = parseInt(e.target.value, 10);
        // on create: v ≥ 1, on edit: v ≥ initialCount, always ≤ 5
        const min = isEdit ? initialCount : 1;
        if (v >= min && v <= 5) {
            setNumStudents(v);
        }
    };

    function closeModal() {
        setIsOpen(false);
        onClose(); // call the onClose function passed from MyForm
    }

    function formatName(name) {
        return name
            .trim()
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const renderStudentFields = () => {
        return Array.from({ length: numStudents }, (_, idx) => {
            const i = idx + 1;
            const student = isEdit ? data[idx] || {} : {};
            return (
                <div key={i} className='mb-8'>
                    <div className='flex items-center gap-1 mb-5'>
                        <UserIcon className='h-6 w-6 text-blue-600' />
                        <span className='text-blue-600 font-medium text-lg'>
                            {numStudents === 1 ? 'Thông tin học sinh' : `Thông tin học sinh thứ ${i}`}
                        </span>
                    </div>

                    <div className='grid md:grid-cols-2 md:gap-6'>
                        {/* Student Name */}
                        <div className='relative z-0 w-full mb-6 group'>
                            <input
                                id={`studentName${i}`}
                                name='studentName'
                                defaultValue={student.studentName || ''}
                                required
                                className='peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
                                placeholder=' '
                            />
                            <label
                                htmlFor={`studentName${i}`}
                                className='absolute top-1 -z-10 origin-[0] -translate-y-6 scale-75 text-gray-500 duration-300 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600'>
                                Họ và tên <span className='text-red-600'>*</span>
                            </label>
                        </div>

                        {/* Year */}
                        <div className='relative z-0 w-full mb-6 group'>
                            <select
                                id={`year${i}`}
                                name='year'
                                defaultValue={student.year || ''}
                                required
                                className='peer block w-full border-0 border-b-2 border-gray-300 bg-transparent 
               py-2.5 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'>
                                {/* blank placeholder */}
                                <option value='' disabled hidden />
                                {/* years 2008–2012 */}
                                {[2008, 2009, 2010, 2011, 2012].map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>

                            <label
                                htmlFor={`year${i}`}
                                className='absolute top-1 -z-10 origin-[0] transform text-gray-500 duration-300
               peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600
               peer-valid:-translate-y-6 peer-valid:scale-75'>
                                Năm sinh <span className='text-red-600'>*</span>
                            </label>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 md:gap-6'>
                        {/* School */}
                        <div className='relative z-0 w-full mb-6 group'>
                            <input
                                id={`school${i}`}
                                type='text'
                                name='school'
                                list={`school-list-${i}`}
                                defaultValue={student.school || ''}
                                required
                                className='peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
                                placeholder=' '
                            />
                            <label
                                htmlFor={`school${i}`}
                                className='absolute top-1 -z-10 origin-[0] -translate-y-6 scale-75 text-gray-500 duration-300 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600'>
                                Trường <span className='text-red-600'>*</span>
                            </label>
                            <datalist id={`school-list-${i}`}>
                                {schoolList.map((s) => (
                                    <option key={s.name} value={s.name} />
                                ))}
                            </datalist>
                        </div>

                        {/* Student Phone */}
                        <div className='relative z-0 w-full mb-6 group'>
                            <input
                                id={`studentPhone${i}`}
                                name='studentPhone'
                                type='tel'
                                defaultValue={student.studentPhone || ''}
                                className='peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
                                placeholder=' '
                                pattern='0[35789][0-9]{8}'
                                title='Số điện thoại không hợp lệ.'
                            />
                            <label
                                htmlFor={`studentPhone${i}`}
                                className='absolute top-1 -z-10 origin-[0] -translate-y-6 scale-75 text-gray-500 duration-300 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600'>
                                Số điện thoại (Không bắt buộc)
                            </label>
                        </div>
                    </div>

                    {/* Subject */}
                    <div className='relative z-0 w-full mb-6 group'>
                        <select
                            id={`subject${i}`}
                            name='subject'
                            defaultValue={student.subject || ''}
                            required
                            className='peer block w-full border-0 border-b-2 border-gray-300 bg-transparent 
               py-2.5 px-0 text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0'>
                            {/* placeholder */}
                            <option value='' disabled hidden />
                            {/* available classes */}
                            {classOptions.map((o) => {
                                // determine suffix
                                let suffix = '';
                                if (o.state === 'disabled') suffix = ' (Sắp khai giảng)';
                                if (o.state === 'wishlist') suffix = ' (Danh sách chờ)';

                                return (
                                    <option
                                        key={o.type}
                                        value={o.type}
                                        // only truly-disabled classes cannot be picked:
                                        disabled={o.state === 'disabled'}
                                        className={`
                                            ${o.state === 'enabled' ? 'text-green-600' : ''}
                                            ${o.state === 'wishlist' ? 'text-yellow-600' : ''}
                                            ${o.state === 'disabled' ? 'text-gray-600' : ''}
                                        `}>
                                        {o.type}
                                        {suffix}
                                    </option>
                                );
                            })}
                        </select>

                        <label
                            htmlFor={`subject${i}`}
                            className='absolute top-1 -z-10 origin-[0] 
               transform text-gray-500 duration-300
               peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600
               peer-valid:-translate-y-6 peer-valid:scale-75'>
                            Chọn lớp học <span className='text-red-600'>*</span>
                        </label>
                    </div>
                </div>
            );
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const nanoid = customAlphabet(str, 6);
        const fields = e.target;
        const updated = [];

        for (let i = 1; i <= numStudents; i++) {
            updated.push({
                studentId: isEdit && data[i - 1]?.studentId ? data[i - 1].studentId : nanoid(),
                time: new Date(),
                registerPhone: fields.backupPhone.value,
                studentName: formatName(fields[`studentName${i}`].value),
                studentPhone: fields[`studentPhone${i}`].value,
                school: fields[`school${i}`].value,
                year: fields[`year${i}`].value,
                subject: fields[`subject${i}`].value,
                backupPhone: fields.backupPhone.value,
                email: fields.email.value,
            });
        }

        // 1) If nothing changed but in edit mode, just close:

        if (isEdit) {
            const isUnchanged =
                data.length === updated.length &&
                data.every((orig, idx) => {
                    const upd = updated[idx];
                    return (
                        orig.studentId === upd.studentId &&
                        orig.studentName === upd.studentName &&
                        orig.studentPhone === upd.studentPhone &&
                        orig.school === upd.school &&
                        orig.year === upd.year &&
                        orig.subject === upd.subject &&
                        orig.backupPhone === upd.backupPhone &&
                        orig.registerPhone === upd.registerPhone
                    );
                });

            if (isUnchanged) {
                setIsLoading(false);
                closeModal();
                return;
            }
        }

        // 2) Otherwise proceed with PUT …

        try {
            if (isEdit) {
                // PUT update
                const res = await fetch(`${apiBase}/api/students/admissions`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: updated }),
                });
                const result = await res.json();
                if (!res.ok || result.status !== 'success') {
                    throw new Error(result.message || 'Update failed');
                }
                onDataUpdated(updated);
            } else {
                // POST create
                const res = await fetch(`${apiBase}/api/students/admissions`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updated),
                });
                const json = await res.json();
                if (!res.ok || json.status !== 'success') {
                    throw new Error(json.message || 'Creation failed');
                }
                onDataUpdated && onDataUpdated(updated);
            }

            // 2) send ZNS
            fetch(`${apiBase}/api/send-zns`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: updated }),
            });

            // 3) send Email
            fetch(`${apiBase}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: updated }),
            });

            if (!isEdit) {
                router.push(`/${registerPhone}`);
            }
        } catch (error) {
            console.error(error);
            alert((isEdit ? 'Cập nhật' : 'Tạo mới') + ' thất bại: ' + error.message);
        } finally {
            setIsLoading(false);
            closeModal();
        }
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-50' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'>
                                <Dialog.Panel className='w-full max-w-md lg:max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                    <Dialog.Title as='h1' className='text-2xl  font-bold text-gray-900 mb-8'>
                                        {isEdit
                                            ? 'Chỉnh sửa đăng ký học tại lớp toán Câu lạc bộ Ánh Sáng'
                                            : 'Phiếu đăng ký học tại lớp toán Câu lạc bộ Ánh Sáng'}
                                    </Dialog.Title>

                                    <form onSubmit={handleSubmit}>
                                        <div className='relative z-0 w-full mb-6 group'>
                                            <select
                                                id='quantity'
                                                name='quantity'
                                                defaultValue={isEdit ? initialCount : 1}
                                                onChange={handleNumStudentsChange}
                                                required
                                                className='peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600'>
                                                {/* blank placeholder */}
                                                <option value='' disabled hidden />
                                                {/* options 1–3 */}
                                                {[1, 2, 3, 4, 5].map((n) => (
                                                    <option key={n} value={n}>
                                                        {n}
                                                    </option>
                                                ))}
                                            </select>
                                            <label
                                                htmlFor='quantity'
                                                className='absolute top-1 -z-10 origin-[0] transform text-gray-500 duration-300
               peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600
               peer-valid:-translate-y-6 peer-valid:scale-75'>
                                                Đăng ký cho số học sinh <span className='text-red-600'>*</span>
                                            </label>
                                        </div>
                                        {numStudents > 0 && renderStudentFields()}{' '}
                                        {/* Render the student fields only if numStudents > 0 */}
                                        {/* Phan ko lap lai */}
                                        <div className='flex items-center gap-1 mb-5'>
                                            <UsersIcon className='h-6 w-6 text-blue-600' />
                                            <span className='text-blue-600 font-medium text-lg'>
                                                Thông tin phụ huynh
                                            </span>
                                        </div>
                                        <div className='grid md:grid-cols-2 md:gap-6'>
                                            {/* Backup Phone */}
                                            <div className='relative z-0 w-full mb-6 group'>
                                                <input
                                                    type='tel'
                                                    name='backupPhone'
                                                    defaultValue={isEdit ? data[0].backupPhone : registerPhone}
                                                    id='backupPhone'
                                                    className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                                    placeholder=' '
                                                    required
                                                    pattern='0[35789][0-9]{8}'
                                                    title='Số điện thoại không hợp lệ.'
                                                />

                                                <label
                                                    htmlFor='backupPhone'
                                                    className=' peer-focus:font-medium absolute  text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-6'>
                                                    Số điện thoại đăng ký Zalo <span className='text-red-600'>*</span>
                                                </label>
                                            </div>
                                            {/* Email */}
                                            <div className='relative z-0 w-full mb-6 group'>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    id='email'
                                                    defaultValue={isEdit ? data[0].email : ''}
                                                    className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                                    placeholder=' '
                                                    required
                                                />
                                                <label
                                                    htmlFor='email'
                                                    className='peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-6'>
                                                    Email phụ huynh <span className='text-red-600'>*</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='flex items-center mt-2 gap-5'>
                                            <button
                                                className='flex items-center gap-3 bg-blue-100 rounded-md border border-transparent  font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 px-4 py-2'
                                                type='submit'
                                                disabled={isLoading}>
                                                {isLoading && (
                                                    <div className='animate-spin rounded-full border-2 border-t-transparent border-blue-900 h-5 w-5' />
                                                )}

                                                {isLoading
                                                    ? isEdit
                                                        ? 'Đang cập nhật…'
                                                        : 'Đang xử lý…'
                                                    : isEdit
                                                    ? 'Chỉnh sửa'
                                                    : 'Đăng ký'}
                                            </button>

                                            <button
                                                type='button'
                                                onClick={closeModal}
                                                className='text-rose-700 hover:text-white border border-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg px-4 py-2 text-center'>
                                                {isEdit ? 'Huỷ chỉnh sửa' : 'Huỷ đăng ký'}
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
