import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card data={item} key={item.id} />
      ));
    } else {
      return <div>We don't have anything :(</div>;
    }
  };

  return (
    <Layout className="bg-red-100">
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="text"
          placeholder="Search products"
          className="rounded-lg border-black w-80 p-4 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>
      <div className="grid gap-8 grid-cols-4 max-w-screen-xl mt-8 mb-12">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
