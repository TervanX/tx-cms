export default function SuccessMessage() {
    return (
        <main className="bg-[#FFFBF5] min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md mx-auto p-8">
                <div className="text-green-500 text-6xl mb-4">✅</div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank you for reaching out!
                </h1>
                <p className="text-gray-600">
                    Our sales team will get back to you within 24 hours to understand your needs and
                    tailor a TervanX solution for your business.
                </p>
            </div>
        </main>
    );
}