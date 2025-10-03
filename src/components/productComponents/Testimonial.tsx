export default function Testimonial() {
  return (
    <div className="bg-bg-lgblue rounded-xl shadow-lg overflow-hidden border border-gray-200 py-6 lg:py-18 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 p-6">
        {/* Content Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Logo and Quote Section */}
          <div className="flex flex-col gap-4">
            <svg width="72" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.73 17.0771C1.29 17.0771 0 15.6029 0 10.8114C0 4.60714 2.51857 0.798572 7.98571 0L8.53857 3.37857C6.08143 3.68571 4.79143 5.40571 4.48429 8.41571C4.73 8.35428 4.97571 8.35428 5.28286 8.35428C8.10857 8.35428 9.21429 9.09143 9.21429 12.5929C9.21429 15.9714 7.92429 17.0771 4.73 17.0771ZM17.0157 17.0771C13.5757 17.0771 12.2857 15.6029 12.2857 10.8114C12.2857 4.60714 14.8043 0.798572 20.2714 0L20.8243 3.37857C18.3671 3.68571 17.0771 5.40571 16.77 8.41571C17.0157 8.35428 17.2614 8.35428 17.5686 8.35428C20.3943 8.35428 21.5 9.09143 21.5 12.5929C21.5 15.9714 20.21 17.0771 17.0157 17.0771Z" fill="#146EF6"/>
            </svg>
            
            <h4 className="text-3xl lg:text-4xl font-medium text-dark leading-relaxed">
              With an end-to-end platform that allowed reps to supplement their contacts with verified data and engage best-fit prospects all in one place, we increased sales qualified leads by an extraordinary 70%.
            </h4>
          </div>

          {/* Author Info */}
          <div className="flex flex-col gap-1">
            <p className="text-base lg:text-xl font-semibold text-dark">
              Kaleb Batman
            </p>
            <p className="text-base lg:text-xl text-dark">
              SDR Manager @ Customer.io
            </p>
          </div>

          {/* Story Link */}
          <div className="mt-2">
            <a 
              href="https://www.apollo.io/magazine/customerio-customer-story"
              className="inline-flex items-center gap-2 group hover:no-underline"
            >
              <span className="text-base lg:text-xl font-semibold text-dark ">
                Read story
              </span>
              <svg width="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M22.375 12.5437C22.375 13.1909 21.8503 13.7156 21.2031 13.7156L4.79687 13.7156C4.14967 13.7156 3.625 13.1909 3.625 12.5437C3.625 11.8965 4.14966 11.3718 4.79687 11.3718L21.2031 11.3718C21.8503 11.3718 22.375 11.8965 22.375 12.5437Z" 
                  fill="currentColor"
                />
                <path 
                  d="M12.1714 21.5755C11.7137 21.1178 11.7137 20.3758 12.1714 19.9182L19.5458 12.5437L12.1714 5.16922C11.7137 4.71157 11.7137 3.96958 12.1714 3.51194C12.629 3.05429 13.371 3.05429 13.8286 3.51194L22.0318 11.7151C22.4894 12.1727 22.4894 12.9147 22.0318 13.3723L13.8286 21.5755C13.371 22.0331 12.629 22.0331 12.1714 21.5755Z" 
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end items-end mt-0">
          <img
            alt="Photo of Kaleb Batman"
            loading="lazy"
            width={375}
            height={201}
            src="/assets/caleb.webp"
            className="rounded-lg object-cover w-96 h-52"
          />
        </div>
      </div>
    </div>
  );
}