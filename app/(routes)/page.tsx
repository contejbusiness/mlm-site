import getRedeems from "@/actions/get-user";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import { initialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import LoadUserComponent from "@/components/load-user";

export const revalidate = 0;

const HomePage = async () => {
  try {
    const user = await initialProfile();
    console.log(user.referredById);
    if (user.referredById === null) {
      return <LoadUserComponent user={user} />;
    }
  } catch (error) {
    console.log(error);
  }

  const user = await getRedeems();
  if (!user) {
    redirectToSignIn();
  }

  let _images = [
    "https://cdn.dribbble.com/users/5155812/screenshots/11170892/media/782e4a339005a346509e3e76d6027436.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/4829719/screenshots/14622274/media/0b0d3b9b9e29c33280f25dd78719294d.png?resize=320x240&vertical=center",
    "https://cdn.dribbble.com/userupload/8930131/file/original-0894d5888c9dd3c63921eb786a3a03d5.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/10712639/screenshots/20388331/media/6c8a1ecbbc4b94ea0ec2f7a6ff427504.png?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/6198127/screenshots/14482803/media/3e5021715ec3678b1b17d16d386239e6.png?resize=400x300&vertical=center",
    "https://cdn.dribbble.com/users/369758/screenshots/5503568/media/6f24bb596fb9eaa410fc3248e18576c3.png?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/902/screenshots/1641912/media/22bebc84cd7b2eb160e78d3963d9a0d9.jpg?resize=400x300&vertical=center",
    "https://cdn.dribbble.com/users/184551/screenshots/1085357/media/e40072618b6ddb521810c98aab0c977c.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/13788846/screenshots/19834510/media/1e707d7d7984469fec430fcdbc468173.png?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/7183491/screenshots/15413119/media/e7d7f8fa270d7b613c123b92a58edde2.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/userupload/7357815/file/original-f678fd10f0b8ff4ecd579e15700513fb.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/8515792/screenshots/16040627/media/d381271c21bcdc64fa820fdd686fbb22.jpg?resize=320x240&vertical=center",
    "https://cdn.dribbble.com/userupload/9075344/file/original-fe8d0e0a9cab86dc6f829984cc34d8ba.jpg?crop=62x1-1368x980&resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/6581854/screenshots/15835212/media/fdc423ff3bf5856dc9c764e6c82377f9.jpg?resize=400x300&vertical=center",
    "https://cdn.dribbble.com/users/266116/screenshots/12015007/media/03855a5afbc5ada5b866fae0fb0b7864.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/153341/screenshots/2479819/media/57795a83670da686f47980525d0b9a33.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/7382000/screenshots/16858222/media/b438112e30a336a166370eb2a87cfd44.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/userupload/7989318/file/original-897a0f8c3c21ce5ad32b0cd892e434c4.jpg?resize=700x525&vertical=center",
    "https://cdn.dribbble.com/users/12473296/screenshots/19040458/media/56e195e3d6dde4234d49e03010cf0198.png?resize=400x300&vertical=center",
    "https://cdn.dribbble.com/users/978006/screenshots/2898873/media/025080276a8aea914c3a67babcc2319c.jpg?resize=700x525&vertical=center",
  ];

  let _products = [
    {
      name: "Tasty Fresh Towels",

      price: "182.00",
      isFeatured: false,
      id: "1",
    },
    {
      name: "Tasty Fresh Cheese",

      price: "997.00",
      isFeatured: true,
      id: "2",
    },
    {
      name: "Luxurious Granite Bacon",

      price: "274.00",
      isFeatured: false,
      id: "3",
    },
    {
      name: "Awesome Fresh Bike",

      price: "579.00",
      isFeatured: false,
      id: "4",
    },
    {
      name: "Awesome Cotton Mouse",

      price: "860.00",
      isFeatured: true,
      id: "5",
    },
    {
      name: "Rustic Bronze Chicken",

      price: "594.00",
      isFeatured: true,
      id: "6",
    },
    {
      name: "Fantastic Frozen Fish",

      price: "432.00",
      isFeatured: false,
      id: "7",
    },
    {
      name: "Generic Steel Bacon",

      price: "375.00",
      isFeatured: true,
      id: "8",
    },
    {
      name: "Electronic Frozen Sausages",

      price: "444.00",
      isFeatured: false,
      id: "9",
    },
    {
      name: "Fantastic Metal Shoes",

      price: "301.00",
      isFeatured: true,
      id: "10",
    },
    {
      name: "Luxurious Fresh Pants",

      price: "597.00",
      isFeatured: false,
      id: "11",
    },
    {
      name: "Luxurious Fresh Shirt",

      price: "813.00",
      isFeatured: true,
      id: "12",
    },
    {
      name: "Awesome Metal Chips",

      price: "469.00",
      isFeatured: false,
      id: "13",
    },
    {
      name: "Licensed Cotton Car",

      price: "230.00",
      isFeatured: true,
      id: "14",
    },
    {
      name: "Luxurious Granite Soap",

      price: "570.00",
      isFeatured: false,
      id: "15",
    },
    {
      name: "Licensed Metal Chair",

      price: "231.00",
      isFeatured: true,
      id: "16",
    },
    {
      name: "Electronic Soft Computer",

      price: "401.00",
      isFeatured: true,
      id: "17",
    },
    {
      name: "Refined Fresh Chips",

      price: "631.00",
      isFeatured: true,
      id: "18",
    },
    {
      name: "Fantastic Bronze Chips",

      price: "280.00",
      isFeatured: false,
      id: "19",
    },
    {
      name: "Luxurious Frozen Pizza",

      price: "531.00",
      isFeatured: false,
      id: "20",
    },
  ];

  const products = _products.map((product, index) => ({
    ...product,
    images: [
      {
        id: "501",
        url: _images[index],
      },
    ],
    color: {
      id: "401",
      name: "Black",
      value: "#000000",
    },
    category: {
      id: "101",
      name: "Tshirt",
      billboard: {
        id: "201",
        label: "Tech Deals",
        imageUrl:
          "https://cdn.dribbble.com/userupload/8930131/file/original-0894d5888c9dd3c63921eb786a3a03d5.jpg?resize=700x525&vertical=center",
      },
    },
    size: {
      id: "301",
      name: "Medium",
      value: "M",
    },
  }));

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
          <ProductList title="Trending Products" items={products} />
        </div>
      </div>
      {/* <LoadUserComponent user={user} /> */}
    </Container>
  );
};

export default HomePage;
