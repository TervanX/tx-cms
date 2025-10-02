import Link from 'next/link';

export default function CtaSection() {
    return (
        <div style={{backgroundImage: 'url(/assets/bottom.svg)', backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"} } className="py-20 px-6 font-grotesque">
            <div className="flex flex-col gap-6 items-center text-center max-w-5xl mx-auto">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                    Find your entire target market in Apollo
                </h1>
                <div>
                    <Link href="/sign-up">
                        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                            <div className="pointer-events-none">
                                <span>Sign up for free</span>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}