import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getCollections } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";
interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  const products = await getProducts();
  return <ProductsWrapper products={products} />;
}
