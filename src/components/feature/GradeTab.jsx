import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TimeTable from '@/components/feature/TimeTable';
import { timetable, teacher, intro, gradeTab, accordianQA, fbGroup, info } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import Team from '@/components/feature/Team';
import Hero from '@/components/feature/Hero';
import AccordionQA from '@/components/feature/AccordionQA';
import CarouselFB from '@/components/feature/CarouselFB';
import Info from '@/components/feature/Info';

export const GradeTab = () => {
    return (
        <Tabs defaultValue='c2' className='w-full'>
            <TabsList className='flex justify-center items-center'>
                {gradeTab.map((item, index) => (
                    <TabsTrigger key={index} value={item.grade}>
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>

            {gradeTab.map((item, index) => (
                <TabsContent key={index} value={item.grade}>
                    <Hero data={intro[item.grade]} grade={item.grade} />

                    <SectionTitle
                        id='schedule'
                        pretitle='Thời gian học'
                        title='Với giờ giấc cố định trong suốt học kỳ'></SectionTitle>

                    <TimeTable data={timetable[item.grade]} />

                    <SectionTitle
                        id='teacher'
                        pretitle='Đội ngũ giáo viên'
                        title='Với nhiều năm kinh nghiệm và phương pháp dạy phù hợp'></SectionTitle>

                    <Team data={teacher[item.grade]} />

                    <SectionTitle
                        id='faq'
                        pretitle='Câu hỏi thường gặp'
                        title='Giúp giải đáp những thắc mắc của phụ huynh và học sinh'></SectionTitle>

                    <AccordionQA data={accordianQA[item.grade]} />

                    <SectionTitle
                        id='group'
                        pretitle='Nhóm Facebook CLB Ánh Sáng'
                        title='Nơi chia sẻ nguồn tài liệu phong phú và giải đáp thắc mắc cho học sinh'></SectionTitle>

                    <CarouselFB data={fbGroup} />

                    <SectionTitle
                        id='info'
                        pretitle='Thông tin lớp học'
                        title='Kết nối với chúng tôi ngay tại đây'></SectionTitle>

                    <Info data={info} />
                </TabsContent>
            ))}
        </Tabs>
    );
};
