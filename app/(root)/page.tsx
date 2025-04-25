import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewByUserId, getLatestInterviews } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const user = await getCurrentUser();

    const [userInterviews, latestInterviews] = await Promise.all([
        getInterviewByUserId(user?.id!),
        getLatestInterviews({ userId: user?.id! })
    ]);

    const hasPastinterviews = userInterviews?.length > 0;
    const hasUpComingInterviews = latestInterviews?.length > 0;

    return (
        <>
            <section className='card-cta'>
                <div className='flex flex-col gap-6 max-w-lg'>
                    <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                    <p className='text-lg'>Practice on real Interview questions</p>

                    <Button asChild className='btn-primary max-sm:w-full'><Link href="/interview">Start Interview</Link></Button>
                </div>

                <Image src="/robot.png" alt='Robot' width={400} height={400} className='max-sm:hidden' />
            </section>

            <section className='flex flex-col gap-6 mt-8'>
                <h2>Your Interviews</h2>

                <div className='interviews-section'>
                    {
                        hasPastinterviews ? (
                            userInterviews?.map((interview) => (
                                <InterviewCard {...interview} key={interview.id} />

                            ))) : (
                            <p>You haven't taken any interviews yet</p>
                        )
                    }
                </div>
            </section>

            <section className='flex flex-col gap-6 mt-8'>
                <h2>Take an Interview</h2>
                <div className='interviews-section'>
                {
                        hasUpComingInterviews ? (
                            latestInterviews?.map((interview) => (
                                <InterviewCard {...interview} key={interview.id} />

                            ))) : (
                            <p>There are no new interviews available</p>
                        )
                    }
                </div>
            </section>
        </>
    )
}
export default Page
