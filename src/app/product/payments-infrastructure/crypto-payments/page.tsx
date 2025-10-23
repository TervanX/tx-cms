"use client";
import Hero from "@/components/subhelpdeskComponents/Hero";
import ContentLayout from "@/components/subhelpdeskComponents/Content";
import Banner from "@/components/subhelpdeskComponents/Banner";
import {
  featuresProps,
  outboundProps,
  productivityProps,
  usabilityProps,
} from "@/app/product/payments-infrastructure/data";
import { usePathname } from "next/navigation";
export default function CryptoPayments() {
  const pathname = usePathname();
  const cryptoPaymentData = {
    featuresProps: featuresProps,
    outboundProps: outboundProps,
    productivityProps: productivityProps,
    usabilityProps: usabilityProps,
  };

  const data =
    pathname === "/product/payments-infrastructure/crypto-payments"
      ? cryptoPaymentData
      : cryptoPaymentData;

  return (
    <main>
      <Hero
        title="Crypto Payments"
        description="Accept BTC, ETH, USDT, and more"
      />
      <ContentLayout {...data} />
      <Banner />
    </main>
  );
}
