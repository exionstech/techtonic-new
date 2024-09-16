"use client"

import { Company, Job } from "@prisma/client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Preview } from "@/components/preview"
import JobsTabContent from "./job-tab-content"


interface TabContentSectionProps {
    userId: string | null
    company: Company
    jobs: Job[]
}

const TabContentSection = ({ userId, company, jobs }: TabContentSectionProps) => {
    return (
        <div className="w-full my-4 mt-12">
            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-transparent shadow-none">
                    <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none bg-transparent text-base font-sans tracking-wider">
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="joinus" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none bg-transparent text-base font-sans tracking-wider">
                       Why Join Us
                    </TabsTrigger>
                    <TabsTrigger value="jobs" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none bg-transparent text-base font-sans tracking-wider">
                        Jobs
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                {company.overview ? <Preview value={company.overview}/> : ""}
                </TabsContent>
                <TabsContent value="joinus">
                {company.whyJoinUs ? <Preview value={company.whyJoinUs}/> : ""}
                </TabsContent>
                <TabsContent value="jobs">
                <JobsTabContent jobs={jobs} userId={userId}/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default TabContentSection
