// app/pricing/[planId]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import PlanDetailPage from '@/components/PricingComponents/PlanDetail';

export default function PlanDetail() {
    const params = useParams();
    const planId = params.planId as string;

    return (<div className='mt-12'>
        <PlanDetailPage planId={planId} />
    </div>)
}