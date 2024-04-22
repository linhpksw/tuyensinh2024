import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TimeTable from "@/components/feature/TimeTable"
import { timetable, teacher, intro } from "@/lib/data"
import SectionTitle from '@/components/ui/SectionTitle'
import Team from '@/components/feature/Team'
import Hero from '@/components/feature/Hero'

export const GradeTab = () => {
    return (
        <Tabs defaultValue="c2" className="w-full">
            <TabsList className="flex justify-center items-center">
                <TabsTrigger value="c2">Dành cho khối THCS</TabsTrigger>
                <TabsTrigger value="c3">Dành cho khối THPT</TabsTrigger>
            </TabsList>

            <TabsContent value="c2">
                <Hero data={intro.c2} />

                <SectionTitle
                    id='schedule'
                    pretitle='Thời gian học'
                    title='Với giờ giấc cố định trong suốt học kỳ'>
                </SectionTitle>

                <TimeTable data={timetable.c2} />

                <SectionTitle
                    id='teacher'
                    pretitle='Đội ngũ giáo viên'
                    title='Với nhiều năm kinh nghiệm và phương pháp dạy phù hợp'>
                </SectionTitle>

                <Team data={teacher.c2} />
            </TabsContent>

            <TabsContent value="c3">
                <Hero data={intro.c3} />

                <SectionTitle
                    id='schedule'
                    pretitle='Thời gian học'
                    title='Với giờ giấc cố định trong suốt học kỳ'>
                </SectionTitle>

                <TimeTable data={timetable.c3} />

                <SectionTitle
                    id='teacher'
                    pretitle='Đội ngũ giáo viên'
                    title='Với nhiều năm kinh nghiệm và phương pháp dạy phù hợp'>
                </SectionTitle>

                <Team data={teacher.c3} />
            </TabsContent>
        </Tabs>

    )
}
