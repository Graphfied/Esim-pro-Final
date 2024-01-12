import { getDynamicProducts } from "@/actions/getDynamicProducts";
import { getFormattedProductsArray } from "@/utils/FormattedProductsArray";
import OrderInfoCard from "@/views/checkoutpage/orderInfoCard";
import TopBar from "@/views/checkoutpage/topBar";
import { RewardSection } from "@/views/checkoutpage/RewardSection";

interface CheckoutProps {
  searchParams: { id: string };
}
export default async function Checkout({ searchParams }: CheckoutProps) {
  const productId = searchParams.id;
  const data = await getDynamicProducts({ productId });
  const formattedData = getFormattedProductsArray({
    products: data,
  });

  return (
    <div>
      <TopBar />
      <div className="max-w-[1350px] flex flex-col lg:flex-row mx-auto">
        <RewardSection />
        <OrderInfoCard data={formattedData} />
      </div>
    </div>
  );
}
