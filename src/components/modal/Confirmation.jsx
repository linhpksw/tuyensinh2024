import Container from '../layout/Container';
import MyModal from './MyModal';
import DeleteModal from './DeleteModal';
import { useState } from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { UserIcon, UsersIcon, ArrowRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { info } from '@/lib/data';

import Link from 'next/link';

const Confirmation = ({ data, onDataUpdated, registerPhone }) => {
    const apiBase = process.env.NEXT_PUBLIC_API_URL;
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [allLoading, setAllLoading] = useState(false);
    const [loadingIds, setLoadingIds] = useState([]);

    const [deleteTarget, setDeleteTarget] = useState(null);
    const router = useRouter();
    const isNotAvailale = data[0].subject.includes('10');

    const openDeleteModal = (target) => {
        setDeleteTarget(target);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        setShowDeleteModal(false);

        if (deleteTarget.type === 'all') {
            await handleDeleteAll();
        } else {
            await handleDeleteOne(deleteTarget.studentId);
        }
        setDeleteTarget(null);
    };

    const callDelete = async (ids) => {
        const res = await fetch(`${apiBase}/api/students/admissions`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentIds: ids }),
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.message || 'Delete failed');
        }
        return res.json();
    };

    const handleDeleteOne = async (studentId) => {
        setLoadingIds((ids) => [...ids, studentId]);
        try {
            await callDelete([studentId]);
            const remaining = data.filter((v) => v.studentId !== studentId);

            if (remaining.length === 0) {
                // that was the last student → go home
                router.push('/');
            } else {
                // still have others → update the list
                onDataUpdated(remaining);
            }
        } catch (err) {
            console.error(err);
            alert('Xoá thất bại: ' + err.message);
        } finally {
            setLoadingIds((ids) => ids.filter((id) => id !== studentId));
        }
    };

    const handleDeleteAll = async () => {
        setAllLoading(true);
        const allIds = data.map((v) => v.studentId);
        try {
            await callDelete(allIds);
            router.push('/');
        } catch (err) {
            console.error(err);
            alert('Xoá tất cả thất bại: ' + err.message);
        } finally {
            setAllLoading(false);
        }
    };

    const listStudents = data.map((v, i) => (
        <div key={i}>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <UserIcon className='h-6 w-6 text-blue-600' />
                    <h3 className='text-lg font-medium leading-6 text-blue-600'>
                        {data.length > 1 ? `Thông tin học sinh thứ ${i + 1}` : 'Thông tin học sinh'}
                    </h3>

                    {data.length > 1 && (
                        <button
                            onClick={() =>
                                openDeleteModal({ type: 'one', studentId: v.studentId, studentName: v.studentName })
                            }
                            type='button'
                            disabled={loadingIds.includes(v.studentId) || allLoading}
                            className='ml-2 flex items-center gap-3 text-rose-700 hover:text-white border border-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg px-4 py-2 text-center'>
                            {loadingIds.includes(v.studentId) ? 'Đang xoá...' : 'Xoá'}
                            {loadingIds.includes(v.studentId) ? (
                                <div className='border-t-transparent border-solid animate-spin  rounded-full border-rose-900 border-2 h-5 w-5'></div>
                            ) : null}
                        </button>
                    )}
                </div>

                {i == 0 ? (
                    <div className='hidden sm:flex sm:gap-5'>
                        <button
                            onClick={() => setShowModal(true)}
                            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2  font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'>
                            Chỉnh sửa
                        </button>

                        <button
                            onClick={() => openDeleteModal({ type: 'all' })}
                            type='button'
                            className='flex items-center gap-3 text-rose-700 hover:text-white border border-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg px-4 py-2 text-center'>
                            {data.length > 1 ? 'Xoá tất cả' : 'Xoá'}
                        </button>
                    </div>
                ) : null}
            </div>

            <div className='mt-5 mb-6 border-t border-gray-200'>
                <dl className='divide-y divide-gray-200'>
                    <div className=' py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                        <dt className=' font-medium text-gray-500'>Họ và tên học sinh</dt>
                        <dd className='mt-1  text-gray-900 sm:col-span-2 sm:mt-0'>{v.studentName}</dd>
                    </div>
                    <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                        <dt className='font-medium text-gray-500'>Đăng kí lớp học</dt>
                        <dd className='mt-1 text-gray-900 sm:col-span-2 sm:mt-0'>{v.subject}</dd>
                    </div>
                    <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                        <dt className='font-medium text-gray-500'>Năm sinh</dt>
                        <dd className='mt-1 text-gray-900 sm:col-span-2 sm:mt-0'>{v.year}</dd>
                    </div>

                    <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                        <dt className='font-medium text-gray-500'>Trường</dt>
                        <dd className='mt-1 text-gray-900 sm:col-span-2 sm:mt-0'>{v.school}</dd>
                    </div>
                    <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                        <dt className=' font-medium text-gray-500'>Số điện thoại học sinh</dt>
                        <dd className='mt-1 text-gray-900 sm:col-span-2 sm:mt-0'>{v.studentPhone}</dd>
                    </div>
                </dl>
            </div>
        </div>
    ));

    return (
        <Container>
            <main className='bg-white pt-10'>
                <div className='flex justify-between'>
                    <h1 className='text-base font-medium text-indigo-600'>Cảm ơn quý phụ huynh!</h1>

                    <a onClick={() => router.push('/')} className='font-medium cursor-pointer hidden sm:block'>
                        <div className='flex items-center gap-2 group text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-200'>
                            Trang chủ{' '}
                            <span
                                aria-hidden='true'
                                className='inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200'>
                                <ArrowRightIcon className='w-5 h-5' />
                            </span>
                        </div>
                    </a>

                    <a onClick={() => router.push('/')} className='sm:hidden cursor-pointer'>
                        <HomeIcon className='w-6 h-6 text-indigo-600 hover:text-indigo-500' />
                    </a>
                </div>

                <div className='flex items-center gap-2 mt-3'>
                    <p className='text-2xl lg:text-4xl font-bold tracking-tighter text-gray-900'>
                        Đăng kí học thành công
                    </p>
                    <CheckBadgeIcon className='w-8 h-8 lg:w-10 lg:h-10 text-emerald-500' />
                </div>

                {/* {isNotAvailale && (
                    <div className='gap-2 mt-3'>
                        <div className='p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50'>
                            <span className='font-medium'>Chú ý: </span> Khối 10 hiện tại đã đủ sĩ số lớp và đơn đăng ký
                            của phụ huynh sẽ nằm vào trong danh sách chờ của lớp. CLB Ánh Sáng sẽ liên hệ với PH ngay
                            khi lớp có chỗ trống mới hoặc có thêm lớp mới ạ.
                        </div>
                    </div>
                )} */}

                <p className='mt-3 text-base text-gray-500'>
                    Đơn đăng kí học cho học sinh{' '}
                    <span className='text-indigo-600 font-medium text-nowrap'>
                        {data.length === 1
                            ? data[0].studentName
                            : data.map((v, i) => {
                                  if (i === data.length - 1) {
                                      return ' và ' + v.studentName;
                                  } else if (i === 0) {
                                      return v.studentName;
                                  } else {
                                      return ', ' + v.studentName;
                                  }
                              })}
                    </span>{' '}
                    đã được trung tâm xác nhận và gửi về email{' '}
                    <Link className='text-indigo-600 font-medium' target='_blank' href={'https://mail.google.com/'}>
                        {data[0].email}
                    </Link>{' '}
                    cùng với tài khoản Zalo{' '}
                    <span className='text-indigo-600 font-medium text-nowrap'>{data[0].backupPhone}</span> đã đăng ký
                    trong phiếu của quý phụ huynh.
                </p>

                <div className='mt-6'>
                    {listStudents}
                    {/* Thong tin phu huynh */}
                    <div className=' flex items-center gap-1'>
                        <UsersIcon className='h-6 w-6 text-rose-600' />
                        <h3 className='text-lg font-medium leading-6 text-rose-600'>Thông tin phụ huynh</h3>
                    </div>

                    {/* Email va Backup Phone */}
                    <div className='mt-5 border-t border-gray-200'>
                        <dl className='divide-y divide-gray-200'>
                            <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                                <dt className='font-medium text-gray-500'>Email</dt>
                                <dd className='mt-1 text-gray-900 sm:col-span-2 sm:mt-0'>{data[0].email}</dd>
                            </div>
                            <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                                <dt className='font-medium text-gray-500'>Số điện thoại đăng ký Zalo</dt>
                                <dd className='mt-1 text-gray-900 sm:col-span-2 sm:mt-0'>{data[0].backupPhone}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className='sm:hidden mt-4 flex items-center gap-3'>
                    <button
                        onClick={() => setShowModal(true)}
                        className='inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2  font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'>
                        Chỉnh sửa
                    </button>

                    <button
                        onClick={() => openDeleteModal({ type: 'all' })}
                        type='button'
                        className='flex items-center gap-3 text-rose-700 hover:text-white border border-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg px-4 py-2 text-center'>
                        {data.length > 1 ? 'Xoá tất cả' : 'Xoá'}
                    </button>
                </div>

                <p className='mt-6 pr-20 text-base text-gray-500'>
                    Để được hỗ trợ tốt nhất, quý phụ huynh có thể nhắn trực tiếp cho trung tâm qua{' '}
                    <a target='_blank' className='text-rose-600 font-medium hover:underline' href={info.zaloOA}>
                        Zalo OA
                    </a>{' '}
                    (biểu tượng chat góc bên phải) để được hỗ trợ và nhấn &quot;
                    <span className='text-indigo-600 font-medium'>Quan tâm</span>&quot; để nhận những thông báo mới nhất
                    trong thời gian tới.
                </p>

                {showModal && (
                    <MyModal
                        onClose={() => setShowModal(false)}
                        data={data}
                        onDataUpdated={onDataUpdated}
                        registerPhone={registerPhone}
                    />
                )}

                {showDeleteModal && (
                    <DeleteModal
                        isBulk={deleteTarget?.type === 'all'}
                        studentName={deleteTarget?.studentName}
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={confirmDelete}
                    />
                )}
            </main>
        </Container>
    );
};

export default Confirmation;
