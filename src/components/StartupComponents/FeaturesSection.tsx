import { FeatureCardProps } from "@/app/types/product.types";

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center text-dark">
      <div className="hidden lg:block">{icon}</div>
      <div className="block lg:hidden">{icon}</div>
      <div className="flex flex-col items-center gap-2 text-center md:gap-4 lg:px-10">
        <p className="font-founders-grotesk text-2xl lg:text-3xl leading-none text-dark">
          {title}
        </p>
        <p className="font-abc-diatype text-[16px] leading-[130%] text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

// Features Section
const FeaturesSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <div className=" flex items-center justify-center lg:w-40 w-32" >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 40 40" fill="none"><path d="M34.4444 4.9997H18.8888C18.582 4.9997 18.3333 5.24843 18.3333 5.55526V9.9997H15.5555V5.55526C15.5555 3.71431 17.0479 2.22192 18.8888 2.22192H34.4444C36.2853 2.22192 37.7777 3.71431 37.7777 5.55526V21.1108C37.7777 22.9518 36.2853 24.4441 34.4444 24.4441H29.9999V21.6664H34.4444C34.7512 21.6664 34.9999 21.4176 34.9999 21.1108V5.55526C34.9999 5.24843 34.7512 4.9997 34.4444 4.9997Z" fill="#572E2C"></path><path d="M12.2222 16.1108H23.3333C23.6401 16.1108 23.8888 16.3595 23.8888 16.6664V27.7775C23.8888 28.0843 23.6401 28.333 23.3333 28.333H18.8888V31.1108H23.3333C25.1742 31.1108 26.6666 29.6184 26.6666 27.7775V16.6664C26.6666 14.8254 25.1742 13.333 23.3333 13.333H12.2222C10.3812 13.333 8.88883 14.8254 8.88883 16.6664V21.1108H11.6666V16.6664C11.6666 16.3595 11.9153 16.1108 12.2222 16.1108Z" fill="#572E2C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5555 24.4441C3.71455 24.4441 2.22217 25.9365 2.22217 27.7775V34.4441C2.22217 36.2851 3.71455 37.7775 5.5555 37.7775H12.2222C14.0631 37.7775 15.5555 36.2851 15.5555 34.4441V27.7775C15.5555 25.9365 14.0631 24.4441 12.2222 24.4441H5.5555ZM5.5555 27.2219C5.24868 27.2219 4.99995 27.4707 4.99995 27.7775V34.4441C4.99995 34.751 5.24868 34.9997 5.5555 34.9997H12.2222C12.529 34.9997 12.7777 34.751 12.7777 34.4441V27.7775C12.7777 27.4707 12.529 27.2219 12.2222 27.2219H5.5555Z" fill="#572E2C"></path></svg></div>,
      title: "Grow your business",
      description: "Find, engage, and close the right buyers at the right time — all from one place. Apollo makes it easier than ever to scale."
    },
    {
      icon: <div className=" flex items-center justify-center lg:w-40 w-32" ><svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 18.8886C23.0683 18.8886 25.5556 16.4013 25.5556 13.333C25.5556 10.2648 23.0683 7.77748 20 7.77748C16.9318 7.77748 14.4445 10.2648 14.4445 13.333C14.4445 16.4013 16.9318 18.8886 20 18.8886ZM20 16.1108C21.5342 16.1108 22.7778 14.8672 22.7778 13.333C22.7778 11.7989 21.5342 10.5553 20 10.5553C18.4659 10.5553 17.2222 11.7989 17.2222 13.333C17.2222 14.8672 18.4659 16.1108 20 16.1108Z" fill="#572E2C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 24.4441C26.1365 24.4441 31.1111 19.4695 31.1111 13.333C31.1111 7.19654 26.1365 2.22192 20 2.22192C13.8635 2.22192 8.88892 7.19654 8.88892 13.333C8.88892 19.4695 13.8635 24.4441 20 24.4441ZM20 21.6664C24.6024 21.6664 28.3334 17.9354 28.3334 13.333C28.3334 8.73066 24.6024 4.9997 20 4.9997C15.3977 4.9997 11.6667 8.73066 11.6667 13.333C11.6667 17.9354 15.3977 21.6664 20 21.6664Z" fill="#572E2C"></path><path d="M26.1111 26.4253C27.1037 25.9611 28.0348 25.3874 28.8889 24.7198V35.9801C28.8889 36.806 28.0197 37.3433 27.2809 36.9739L20 33.3334L12.7192 36.9739C11.9804 37.3433 11.1111 36.806 11.1111 35.9801V24.7198C11.9652 25.3874 12.8963 25.9611 13.8889 26.4253V33.2833L20 30.2278L26.1111 33.2833V26.4253Z" fill="#572E2C"></path></svg></div>,
      title: "Snag exclusive perks",
      description: "Get discounted access to Apollo's vast B2B database, explore a marketplace for SaaS tool savings, and much more."
    },
    {
      icon: <div className=" flex items-center justify-center lg:w-40 w-32" ><svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8103 6.26165L19.9999 6.85645L21.1896 6.26165C26.0364 3.83824 31.7413 3.83824 36.5881 6.26165C37.3172 6.62618 37.7777 7.37134 37.7777 8.18647V32.8831C37.7777 34.1981 36.3938 35.0534 35.2177 34.4653C31.2336 32.4733 26.5441 32.4733 22.56 34.4653L20.9876 35.2515C20.3659 35.5624 19.634 35.5624 19.0123 35.2515L17.4399 34.4653C13.4558 32.4733 8.76632 32.4733 4.78223 34.4653C3.60605 35.0534 2.22217 34.1981 2.22217 32.8831V8.18647C2.22217 7.37135 2.6827 6.62618 3.41177 6.26165C8.25858 3.83824 13.9635 3.83824 18.8103 6.26165ZM18.6111 9.26765L17.5681 8.74617C13.618 6.77114 8.98836 6.71539 4.99995 8.57891V31.3348C9.42451 29.6218 14.3947 29.8371 18.6821 31.9808L19.9999 32.6397L21.3177 31.9808C25.6051 29.8371 30.5754 29.6218 34.9999 31.3348V8.57891C31.0115 6.71539 26.3819 6.77114 22.4318 8.74617L21.3888 9.26765V27.9676H18.6111V9.26765Z" fill="#572E2C"></path></svg></div>,
      title: "Boost your Apollo know-how",
      description: "Enjoy startup-focused webinars and other resources to help you get the most out of Apollo for your specific needs."
    },
    {
      icon: <div className=" flex items-center justify-center lg:w-40 w-32" ><svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.5554 15.5553C25.5554 18.6235 23.0681 21.1108 19.9998 21.1108C16.9316 21.1108 14.4443 18.6235 14.4443 15.5553C14.4443 12.487 16.9316 9.9997 19.9998 9.9997C23.0681 9.9997 25.5554 12.487 25.5554 15.5553ZM22.7776 15.5553C22.7776 17.0894 21.534 18.333 19.9998 18.333C18.4657 18.333 17.2221 17.0894 17.2221 15.5553C17.2221 14.0211 18.4657 12.7775 19.9998 12.7775C21.534 12.7775 22.7776 14.0211 22.7776 15.5553Z" fill="#572E2C"></path><path d="M28.7658 28.5169C28.1048 29.197 27.3654 29.8005 26.5621 30.3127C25.4186 27.8324 22.9103 26.1108 19.9998 26.1108C17.0894 26.1108 14.5811 27.8323 13.4376 30.3126C12.6343 29.8004 11.8949 29.1969 11.2339 28.5168C12.9353 25.4267 16.2231 23.333 19.9998 23.333C23.7766 23.333 27.0644 25.4268 28.7658 28.5169Z" fill="#572E2C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9999 37.7775C29.8183 37.7775 37.7777 29.8181 37.7777 19.9997C37.7777 10.1813 29.8183 2.22192 19.9999 2.22192C10.1816 2.22192 2.22217 10.1813 2.22217 19.9997C2.22217 23.2186 3.07764 26.2376 4.57363 28.8419L3.16309 34.202C2.73653 35.8229 4.18958 37.3146 5.82112 36.9307L11.4703 35.6014C14.0024 36.9887 16.9091 37.7775 19.9999 37.7775ZM7.55 28.4466L6.98229 27.4583C5.72171 25.2638 4.99995 22.7203 4.99995 19.9997C4.99995 11.7154 11.7157 4.9997 19.9999 4.9997C28.2842 4.9997 34.9999 11.7154 34.9999 19.9997C34.9999 28.284 28.2842 34.9997 19.9999 34.9997C17.3872 34.9997 14.9383 34.3341 12.805 33.1653L11.8709 32.6535L6.08464 34.015L7.55 28.4466Z" fill="#572E2C"></path></svg></div>,
      title: "Get dedicated support",
      description: "Schedule 1:1 time with a partnerships manager to learn best practices, tips for Apollo, or tackle any burning questions."
    }
  ];

  return (
    <div className="flex justify-center px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 my-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
          <h4 className="max-w-6xl text-balance font-founders-grotesk text-[36px] leading-none tracking-[-0.72px] text-dark md:text-[48px] md:tracking-[-0.96px] lg:text-[48px] lg:tracking-[-0.96px] xl:text-[56px] xl:tracking-[-1.12px] lg:mb-12 mb-6">
            Why join Apollo for Startups?
          </h4>
        </div>
        <div className="h-10" />
        <div className="grid gap-x-6 gap-y-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="h-10" />
      </div>
    </div>
  );
};

export default FeaturesSection