export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your username",
    componentType: "input",
    type: "text",
  },

  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },

  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },

  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category", 
    componentType: "select",
    options: [
      { id: "men-braids", label: "Men-braids" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "installations", label: "Installations" },
      { id: "revamp", label: "Revamp" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "piano wigs", label: "Piano wigs" },
      { id: "bouncing wigs", label: "Bouncing wigs" },
      { id: "bob-wigs", label: "Bob-wigs" },
      { id: "braids", label: "Braids" },
      { id: "bone-Straight", label: "Bone-Straight" },
      { id: "pizzy-Curls", label: "Pizzy-Curls"},
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];


export const shoppingViewHeaderMenuItems =[

  {
    id:'home',
    label: 'Home',
    path: '/shop/home',
  },
  {
    id:'men-braids',
    label: 'Men-braids',
    path: '/shop/listing',
  },
  {
    id:'women',
    label: 'Women',
    path: '/shop/listing',
  },
  {
    id:'kids',
    label: 'Kids',
    path: '/shop/listing',
  },
  {
    id:'revamps',
    label: 'Revamps',
    path: '/shop/listing',
  },
  {
    id:'hair-intallations',
    label: 'Hair-intallations',
    path: '/shop/listing',
  },
];

export const categoryOptionsMap = {
  menBraids: "Men-Braids",
  women: "Women",
  kids: "Kids",
  hairinstallations: "Hair-Installations",
  revamps: "Revamps",
};

export const brandOptionsMap = {
  pianowig: "Piano straight",
  boucingwigs: "Bouncing wigs",
  "bob-wigs": "Bob-Wigs",
  braids: "Braids",
  "bone-Straight": "bone-Straight",
  "pizzy-Curls": "pizzy-Curls",
};


export const filterOptions = {
  category: [
    { id: "men-braids", label: "Men-Braids" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "revamps", label: "Revamps" },
    { id: " hair-installations", label: "Hair-Intallations" },
  ],
  brand: [
    { id: "piano straight", label: "Piano - wigs" },
    { id: "bouncing wigs", label: "Bouncing - wigs" },
    { id: "bob-wigs", label: "Bob-wigs" },
    { id: "braids", label: "Braids" },
    { id: "bone-Straight", label: "Bone-Straight" },
    { id: "pizzy-Curls", label: "Pizzy-Curls" },
  ],
};

export const sortOptions = [
  { id: "price-low-to-high", label: "Price: Low to High" },
  { id: "price-high-to-low", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];


