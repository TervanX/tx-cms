import PayAsYouGoDetails from '@/components/PricingComponents/PaygDetails';
import { payAsYouGoPlan } from '@/components/PricingComponents/data';

export default function PayAsYouGoPage() {
    return (
        <div className='mt-12'>
            <PayAsYouGoDetails plan={payAsYouGoPlan} />
        </div>
    )
}