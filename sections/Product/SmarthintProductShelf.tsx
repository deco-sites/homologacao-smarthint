import ProductShelf from "../../components/product/ProductShelf.tsx";
import { SmarthintPosition } from "apps/smarthint/loaders/vitrinesWithProducts.ts";

export interface Props {
  smarthint: SmarthintPosition[] | null;
}

function SmarthintProductShelf({ smarthint }: Props) {
  if (!smarthint?.length) return null;

  return (
    <>
      {smarthint.map(
        ({
          products,
          titleRecommendation,
          eventGoogleAnalytics,
          nameRecommendation,
          position,
        }) => {
          if (!products?.length) return null;

          return (
            <ProductShelf
              products={products}
              title={titleRecommendation}
              itemListName={eventGoogleAnalytics}
              nameRecommendation={nameRecommendation}
              positionRecommendation={position}
            />
          );
        },
      )}
    </>
  );
}

export default SmarthintProductShelf;

export function LoadingFallback() {
  return (
    <div style={{ height: "716px" }} class="flex justify-center items-center">
      <span class="loading loading-spinner" />
    </div>
  );
}
