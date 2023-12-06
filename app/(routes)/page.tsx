import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  // const products = await getProducts({ isFeatured: true });\
  const products = [
    {
      id: "1",
      category: {
        id: "101",
        name: "Electronics",
        billboard: {
          id: "201",
          label: "Tech Deals",
          imageUrl:
            "https://i.pinimg.com/564x/8f/0e/a7/8f0ea7b58ae851925fc471713de6ffce.jpg",
        },
      },
      name: "Smartphone X",
      price: "599.99",
      isFeatured: true,
      size: {
        id: "301",
        name: "Medium",
        value: "M",
      },
      color: {
        id: "401",
        name: "Black",
        value: "#000000",
      },
      images: [
        {
          id: "501",
          url: "https://i.pinimg.com/564x/8f/0e/a7/8f0ea7b58ae851925fc471713de6ffce.jpg",
        },
        {
          id: "502",
          url: "https://i.pinimg.com/564x/8f/0e/a7/8f0ea7b58ae851925fc471713de6ffce.jpg",
        },
      ],
    },
  ];

  // const billboard = await getBillboard("42e9db94-9932-4a33-addf-af821207c9df");
  const billboard = {
    id: "42e9db94-9932-4a33-addf-af821207c9df",
    storeId: "351dc5ff-1a43-4df0-89cb-47bfdfa29fe9",
    label: "",
    imageUrl:
      "https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg",
    createdAt: "2023-08-02T14:44:48.431Z",
    updatedAt: "2023-08-08T16:08:28.419Z",
  };

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
