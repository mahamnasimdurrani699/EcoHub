import { Link } from "react-router-dom";
import straw from "../assets/straw.jpeg";
import jars from "../assets/jars.jpg";
import lunch_box from "../assets/lunch_box.jpg";
import  containersAll from "../assets/containersAll.webp"
import dabii from "../assets/dabii.jpg";
import friesBox from "../assets/friesBox.webp";
import plates from "../assets/plates.jpg";
import  kitchenset from "../assets/kitchenset.jpg";
import  spoonset from "../assets/spoonset.jpg";
import  steelbottle from "../assets/steelBottle.jpg";
import  knottedSkewers from "../assets/knottedSkewers.webp";
import  multipurposeBox from "../assets/multipurposeBox.webp";
import  compartmentBowl from "../assets/compartmentBowl.jpg";
import  bag from "../assets/bag.webp";
import  fastfoodBox from "../assets/fastfoodBox.webp";
//for mock data means top liked section
import brush from "../assets/brush.jpeg";
import organicsoap from "../assets/organicsoap.jpg";
import miswak from "../assets/miswak.jpg";
import Bag from "../assets/Bag.jpg";
import candles from "../assets/candles.jpeg";
import airPurifier from "../assets/airpurifier.jpg";
import hairremover from "../assets/hairremover.jpg";





export const categories = [
  <Link to="/food">Food and Beverges</Link>,
  <Link to="/SelfCare">Personal Care Products</Link>,
  <Link to="/household">Household Products</Link>,
  <Link to="/furniture">Eco-friendly Furniture </Link> ,
  <Link to="/BestProducts">Best Products </Link> ,
];
export const food = [
  {
    id: 20,
    name: "Paper Straw",
    image: straw,
    
    description: <p>The 6mm straw is ideal for juices and sodas. With 4 thick layers of paper, it won't wilt inside the drink, making sure your straw remains intact until the end of your drink. After use, this straw can be composted at home.     <br/>
    <p>Plastic straws are a menace, after disposable they pollute our waters and can never be recycled. We use millions of plastic straws everyday, and each straw is still present in our environment.</p>
    </p>,
    price: 200,
"info": <p><b>Product Information</b>
<p>Enjoy your drinks guilt-free with EcoHub's premium 4-layer paper straws. Made from certified food-grade materials, these straws are safe, durable, and environmentally friendly.</p> 
<p><b>Key Features:</b></p> 
<ul> 
<li><b>Strong & Long-Lasting:</b> Crafted with 4 thick layers of food-grade Kraft paper, ensuring it stays intact for up to 30 minutes in liquids.</li> 
<li><b>Ideal Size:</b> 6mm diameter, perfect for sodas, juices, and other beverages.</li> 
<li><b>Eco-Friendly & Compostable:</b> 100% biodegradable and can be composted at home, reducing plastic waste.</li> 
<li><b>Perfect for Any Occasion:</b> Great for parties, events, and everyday use.</li> 
</ul></p> 

  },
  {
    id: 21,
    name: "fries box",
    image: friesBox,
    price: 150,
    description: <p>Upgrade your food presentation with our eco-friendly <b>Fries Box</b>, crafted from high-quality, food-grade Kraft paper. Designed for convenience and style, this sturdy box keeps your fries crisp and fresh while being completely biodegradable.
<p><b>Perfect for:</b></p> 
<ul> 
<li>Fast food restaurants, cafes, and food trucks</li> 
<li>Parties, events, and takeaways</li> 
<li>Serving French fries, wedges, onion rings, and more</li> 
</ul> 
<p>With a sleek, ergonomic design, our Fries Box ensures a comfortable grip and easy handling. Plus, its grease-resistant coating prevents leaks, keeping your hands clean. Enjoy a sustainable serving solution while reducing plastic waste!</p></p> 
,
    info: <p><b>Product Information</b> 
    <p>Our eco-friendly <b>Fries Box</b> is made from premium food-grade Kraft paper, ensuring durability while keeping your fries crispy and fresh. Designed for both style and function, it's the perfect solution for serving snacks conveniently.</p> 
    <p><b>Key Features:</b></p> 
    <ul> 
    <li><b>Sturdy & Durable:</b> Made with high-quality Kraft paper for a strong and reliable hold.</li> 
    <li><b>Grease-Resistant Coating:</b> Prevents leaks and keeps hands clean.</li> 
    <li><b>Eco-Friendly & Biodegradable:</b> 100% compostable, reducing plastic waste.</li> 
    <li><b>Perfect Size & Design:</b> Ergonomic, easy-to-hold shape for comfortable handling.</li> 
    <li><b>Multi-Purpose Use:</b> Ideal for French fries, potato wedges, onion rings, and other snacks.</li> 
    </ul> 
    <p>Great for fast food restaurants, food trucks, parties, and takeaways—serve in style while staying eco-conscious!</p></p>,
  },
  {
    id:22,
    name: "glass jars",
    image: jars,
    price: 150,
    description: <p>Store, preserve, and showcase your essentials with our premium <b>Glass Jars</b>. Made from high-quality, food-grade glass, these jars offer durability, clarity, and a sleek design that enhances any kitchen, pantry, or workspace.
<p><b>Perfect for:</b></p> 
<ul> 
<li>Storing dry goods like spices, coffee, sugar, and pasta</li> 
<li>Preserving jams, pickles, sauces, and homemade treats</li> 
<li>Organizing beauty products, crafts, or DIY projects</li> 
<li>Serving as elegant packaging for gifts and business branding</li> 
</ul> 
<p>Each jar features an airtight, leak-proof lid to keep contents fresh and free from moisture. Reusable, recyclable, and stylish—our glass jars are an eco-friendly storage solution for every need.</p></p>
,
    info:  <p><b>Product Information</b>
<p>Our high-quality <b>Glass Jars</b> are designed for durability, versatility, and eco-friendly storage. Whether you're preserving food, organizing essentials, or packaging homemade products, these jars provide a stylish and functional solution.</p> 
<p><b>Key Features:</b></p> 
<ul> 
<li><b>Premium-Grade Glass:</b> Made from thick, food-safe glass for long-lasting use.</li> 
<li><b>Airtight & Leak-Proof Lid:</b> Ensures freshness and prevents spills, available in metal, bamboo, or cork options.</li> 
<li><b>Multi-Purpose Use:</b> Ideal for storing spices, jams, sauces, pickles, dry goods, beauty products, or craft supplies.</li> 
<li><b>Eco-Friendly & Reusable:</b> A sustainable alternative to plastic containers—recyclable and easy to clean.</li> 
<li><b>Available in Various Sizes & Styles:</b> Choose from a range of capacities to suit your needs.</li> 
</ul> 
<p>Perfect for home, kitchen, businesses, and gifting—upgrade your storage with a touch of elegance and sustainability!</p></p>,
  },
  {
    id:23,
    name: "lunch box",
    image: lunch_box,
    price: 1850,
    description: <p><b>Product Information</b> 
<p>Our <b>Lunch Box</b> is built for convenience, ensuring your meals stay fresh and neatly packed wherever you go. Whether for work, school, or travel, this lunch box is the perfect choice for carrying balanced meals effortlessly.</p> 
<p><b>Key Features:</b></p> 
<ul> 
<li><b>Premium-Quality Material:</b> Made from food-safe, BPA-free plastic, stainless steel, or eco-friendly Kraft paper.</li> 
<li><b>Leak-Proof & Secure:</b> Airtight lid prevents spills and keeps food fresh.</li> 
<li><b>Microwave & Dishwasher Safe:</b> (For applicable materials) Easy reheating and cleaning.</li> 
<li><b>Eco-Friendly & Reusable:</b> A sustainable alternative to disposable food containers.</li> 
</ul> </p>
,
    info: <p><b>Product Information</b> 
<p>Our <b>Lunch Box</b> is designed for convenience, durability, and eco-friendly food storage. Whether you're packing meals for school, work, travel, or meal prep, this lunch box ensures your food stays fresh and secure.</p> 
<p><b>Key Features:</b></p> 
<ul> 
<li><b>High-Quality Material:</b> Made from food-grade, BPA-free plastic, stainless steel, or eco-friendly Kraft paper.</li> 
<li><b>Leak-Proof & Secure:</b> Airtight, spill-proof lid keeps food fresh and mess-free.</li> 
<li><b>Multi-Compartment Design:</b> Separates different food items for a balanced meal.</li> 
<li><b>Microwave & Dishwasher Safe:</b> (For applicable materials) Convenient for reheating and easy cleaning.</li> 
<li><b>Eco-Friendly & Reusable:</b> A sustainable alternative to disposable food containers.</li> 
<li><b>Compact & Portable:</b> Lightweight and easy to carry, perfect for on-the-go meals.</li> 
<li><b>Available in Various Sizes & Styles:</b> Choose the perfect option for your meal needs.</li> 
</ul> 
<p>Enjoy fresh, well-organized meals anytime with our stylish and functional lunch box!</p></p>
,
  },
  {
    id: 24,
    name: " container",
    image: dabii,
    price: 150,
    description: <p>Keep your art and craft supplies neatly organized with our durable <b>Craft Container</b>. Designed for versatility, this container is perfect for storing beads, buttons, sequins, paints, threads, and other creative essentials.
<p>With a sturdy build and secure lid, it prevents spills and keeps your materials fresh and accessible. Whether you're a professional artist, DIY enthusiast, or hobbyist, this container is an ideal storage solution for your creative needs.</p> 
<p>Perfect for home, school, or studio use, our craft container helps you stay organized while enhancing your creative workspace!</p></p>
,
   "info": <p><b>Product Information</b>  
<p>Keep your craft supplies organized and easily accessible with our versatile <b>Craft Container</b>. Designed for durability and convenience, it provides a secure and efficient storage solution for all your creative essentials.</p>  
<p><b>Key Features:</b></p>  
<ul>  
<li><b>Durable & High-Quality Material:</b> Made from sturdy, lightweight, and long-lasting plastic or eco-friendly materials.</li>  
<li><b>Secure Lid Closure:</b> Prevents spills and keeps small items safely stored.</li>  
<li><b>Multi-Compartment Design:</b> Ideal for organizing beads, buttons, sequins, paints, threads, and more.</li>  
<li><b>Transparent or Colored Options:</b> Available in clear or vibrant colors for easy identification of contents.</li>  
<li><b>Stackable & Space-Saving:</b> Compact design makes storage efficient and clutter-free.</li>  
<li><b>Portable & Lightweight:</b> Easy to carry, perfect for home, school, or studio use.</li>  
<li><b>Available in Various Sizes & Shapes:</b> Choose the ideal size based on your crafting needs.</li>  
</ul>  
<p>Enhance your creativity with our stylish and functional craft container—perfect for artists, hobbyists, and DIY enthusiasts!</p></p>
,
  },
  {
    id: 25,
    name: "  set of container",
    image: containersAll,
    price: 150,
    description: <p>Keep your art and craft supplies neatly organized with our durable <b>Craft Container</b>. Designed for versatility, this container is perfect for storing beads, buttons, sequins, paints, threads, and other creative essentials.
    <p>With a sturdy build and secure lid, it prevents spills and keeps your materials fresh and accessible. Whether you're a professional artist, DIY enthusiast, or hobbyist, this container is an ideal storage solution for your creative needs.</p> 
    <p>Perfect for home, school, or studio use, our craft container helps you stay organized while enhancing your creative workspace!</p></p>  ,
    info: <p><b>Product Information</b>  
    <p>Keep your craft supplies organized and easily accessible with our versatile <b>Craft Container</b>. Designed for durability and convenience, it provides a secure and efficient storage solution for all your creative essentials.</p>  
    <p><b>Key Features:</b></p>  
    <ul>  
    <li><b>Durable & High-Quality Material:</b> Made from sturdy, lightweight, and long-lasting plastic or eco-friendly materials.</li>  
    <li><b>Secure Lid Closure:</b> Prevents spills and keeps small items safely stored.</li>  
    <li><b>Multi-Compartment Design:</b> Ideal for organizing beads, buttons, sequins, paints, threads, and more.</li>  
    <li><b>Transparent or Colored Options:</b> Available in clear or vibrant colors for easy identification of contents.</li>  
    <li><b>Stackable & Space-Saving:</b> Compact design makes storage efficient and clutter-free.</li>  
    <li><b>Portable & Lightweight:</b> Easy to carry, perfect for home, school, or studio use.</li>  
    <li><b>Available in Various Sizes & Shapes:</b> Choose the ideal size based on your crafting needs.</li>  
    </ul>  
    <p>Enhance your creativity with our stylish and functional craft container—perfect for artists, hobbyists, and DIY enthusiasts!</p></p>,
  },
  {
  id: 26,
  name: "  set of plates",
  image: plates,
  price: 150,
  description:<p><b>Elegant & Durable Set of Plates</b>

  <p><b>Perfect for Every Occasion:</b> Elevate your dining experience with our stylish and durable <b>Set of Plates</b>. Designed for both everyday use and special occasions, these plates blend elegance with functionality, making them a must-have for any kitchen or dining setup.</p>  
  
  <p><b>Premium Quality & Long-Lasting:</b> Crafted from high-quality, food-safe materials, our plates are resistant to scratches, stains, and heat. Their durability ensures they remain in excellent condition for years to come.</p>  
  
  <p><b>Versatile & Stylish:</b> Whether you're serving daily meals or hosting guests, this set adds a touch of sophistication to your table. Available in various designs, sizes, and materials, you can choose the perfect set to match your style and dining needs.</p></p>
,
  info: <p><b>Product Information</b> 
<p>Our premium <b>Set of Plates</b> is designed for durability, style, and convenience. Perfect for home dining, restaurants, or festive gatherings, these plates offer a perfect blend of aesthetics and functionality.</p>  
<p><b>Key Features:</b></p>  
<ul>  
<li><b>High-Quality Material:</b> Made from ceramic, porcelain, melamine, or eco-friendly bamboo.</li>  
<li><b>Scratch & Stain Resistant:</b> Maintains its shine and durability over time.</li>  
<li><b>Microwave & Dishwasher Safe:</b> (For applicable materials) Easy to clean and convenient for reheating.</li>  
<li><b>Elegant & Versatile Designs:</b> Available in classic, modern, and decorative styles.</li>  
<li><b>Perfect for All Occasions:</b> Ideal for daily meals, formal dinners, and celebrations.</li>  
<li><b>Available in Various Sizes & Sets:</b> Choose from small, medium, or large sets to fit your needs.</li>  
</ul>  
<p>Upgrade your dining collection with our exquisite set of plates—where style meets functionality!</p></p>
,
},
{
  id: 27,
  name: "  kitchen set",
  image: kitchenset,
  price: 150,
  description: <p><b>Stylish & Practical Craft Kitchen Set Plates</b>  

<p>Enhance your dining with our elegant and durable <b>Craft Kitchen Set Plates</b>. Designed for everyday use and special occasions, these plates offer a perfect balance of style and functionality.</p>  

<p><b>Key Features:</b></p>  
<ul>  
<li><b>High-Quality Material:</b> Made from premium, food-safe materials.</li>  
<li><b>Durable & Scratch-Resistant:</b> Ensures long-lasting use.</li>  
<li><b>Versatile Use:</b> Ideal for serving meals at home or events.</li>  
<li><b>Easy to Clean:</b> Dishwasher safe for convenience.</li>  
<li><b>Available in Multiple Designs:</b> Choose a style that fits your kitchen.</li>  
</ul></p>,
  info:<p><b>Product Information</b> 

<p>Our <b>Craft Kitchen Set Plates</b> combine elegance, durability, and practicality, making them perfect for daily use and special occasions. Designed with high-quality materials, they ensure long-lasting performance and effortless dining.</p>  

<p><b>Key Features:</b></p>  
<ul>  
<li><b>Premium Quality:</b> Made from food-safe, durable materials.</li>  
<li><b>Scratch & Stain Resistant:</b> Maintains its look even with frequent use.</li>  
<li><b>Lightweight & Convenient:</b> Easy to handle and store.</li>  
<li><b>Dishwasher & Microwave Safe:</b> Hassle-free cleaning and reheating.</li>  
<li><b>Versatile Design:</b> Suitable for home, restaurants, and gatherings.</li>  
<li><b>Available in Various Sizes & Styles:</b> Choose the perfect set for your kitchen.</li>  
</ul>  

<p>Upgrade your kitchen with our stylish and functional craft kitchen set plates—designed to make every meal special!</p></p>
,
},
  
{
  id: 28,
  name: " steel bottel",
  image: steelbottle,
  price: 150,
  description:<p><b>Stay Hydrated, Stay Sustainable with Our Stainless Steel Bottle!</b>

  <p>Crafted from <b>high-quality, food-grade stainless steel</b>, this eco-friendly bottle keeps drinks hot for 12 hours and cold for 24 hours while reducing plastic waste.</p>
  
  <p><b>Key Features:</b></p>
  <ul>
    <li> <b>Double-wall insulation</b> – Maintains temperature longer</li>
    <li> <b>Leak-proof & sweat-free</b> – No spills, no mess</li>
    <li> <b>Durable & rust-resistant</b> – Built to last</li>
    <li> <b>BPA-free & toxin-free</b> – Safe & eco-friendly</li>
    <li> <b>Lightweight & travel-friendly</b> – Perfect for any adventure</li>
  </ul>
  
  <p>Ideal for <b>coffee, tea, or water</b>, our <b>Steel Bottle</b> is the perfect sustainable hydration solution!</p>
  </p>,
  info:<p><b>Stay Hydrated, Stay Eco-Friendly with Our Premium Steel Bottle!</b>

  <p>Upgrade your hydration game with our <b>durable, stylish, and eco-conscious</b> stainless steel bottle. Designed for convenience, it keeps your drinks fresh while reducing plastic waste.</p>
  
  <p><b>Why Choose Our Steel Bottle?</b></p>
  <ul>
    <li><b>Double-Wall Insulation:</b> Keeps beverages hot for up to 12 hours and cold for 24 hours.</li>
    <li><b>Leak-Proof & Sweat-Free:</b> No spills, no mess—perfect for on-the-go use.</li>
    <li><b>Premium Stainless Steel:</b> Rust-resistant, BPA-free, and built to last.</li>
    <li><b>Lightweight & Travel-Friendly:</b> Ideal for work, gym, hiking, and daily use.</li>
  </ul>
  
  <p>Say goodbye to single-use plastics and embrace a sustainable lifestyle with our high-quality steel bottle!</p>
  </p>,
},

{
  id: 29,
  name: "  spoon set",
  image: spoonset,
  price: 150,
  description: <p><b>Enhance Your Dining Experience with Our Elegant Craft Spoon Set!</b>

  <p>Designed for both style and functionality, our <b>Craft Spoon Set</b> is perfect for daily meals and special occasions. Made from <b>high-quality, food-safe materials</b>, these spoons offer durability, comfort, and a premium dining feel.</p>
  
  <p><b>Perfect for:</b></p>  
<ul>  
  <li>Everyday dining and special occasions</li>  
  <li>Home, restaurants, and catering services</li>  
  <li>Gifting for housewarming and weddings</li>  
  <li>Serving desserts, soups, and gourmet dishes</li>  
</ul>  

  <p>Upgrade your tableware with our stylish and long-lasting <b>Craft Spoon Set</b>—perfect for every meal!</p>
  </p>,
  info:
  <p>Designed for both style and functionality, our <b>Craft Spoon Set</b> is perfect for daily meals and special occasions. Made from <b>high-quality, food-safe materials</b>, these spoons offer durability, comfort, and a premium dining feel.
  
  <p><b>Why Choose Our Craft Spoon Set?</b></p>
  <ul>
    <li><b>Premium Quality:</b> Made from durable, rust-resistant, and food-grade materials.</li>
    <li><b>Ergonomic Design:</b> Comfortable grip for easy handling.</li>
    <li><b>Scratch & Stain Resistant:</b> Maintains its shine and elegance over time.</li>
    <li><b>Dishwasher Safe:</b> Hassle-free cleaning for everyday convenience.</li>
    <li><b>Versatile Use:</b> Ideal for home, restaurants, parties, and gifting.</li>
  </ul>
  
  <p>Upgrade your tableware with our stylish and long-lasting <b>Craft Spoon Set</b>—perfect for every meal!</p>
  </p>,
},

{
  id: 30,
  name: "  Knotted skewers",
  image: knottedSkewers,
  price: 150,
  description: <p><b>Enhance Your Food Presentation with Our Knotted Skewers!</b>

  <p>Crafted from premium, eco-friendly bamboo, our <b>Knotted Skewers</b> are perfect for adding a touch of elegance to your food presentation. These sturdy and stylish skewers are ideal for appetizers, kebabs, and cocktail garnishes.</p>  
  
  <p><b>Key Features:</b></p>  
  <ul>  
    <li> <b>Eco-Friendly & Biodegradable:</b> Made from 100% natural bamboo</li>  
    <li> <b>Sturdy & Durable:</b> Holds food securely without breaking</li>  
    <li> <b>Elegant Knotted Design:</b> Enhances presentation for parties and events</li>  
    <li> <b>Multipurpose Use:</b> Ideal for appetizers, grilling, cocktails, and desserts</li>  
    <li> <b>Available in Various Sizes:</b> Suitable for all serving needs</li>  
  </ul>    
  </p>,
  info:<p><b>Product Information</b>

  <p>Enhance your food presentation with our <b>Knotted Skewers</b>, crafted from eco-friendly bamboo. Sturdy, splinter-free, and stylish, they’re perfect for appetizers, kebabs, cocktails, and desserts.</p>  
  
  <p><b>Key Features:</b></p>  
  <ul>  
    <li>100% natural bamboo – biodegradable & eco-friendly</li>  
    <li> Elegant knotted design for a refined touch</li>  
    <li> Durable, splinter-free, and easy to handle</li>  
    <li> Available in various sizes for versatile use</li>  
  </ul>  
  
  <p>Perfect for restaurants, catering, parties, and home entertaining!</p></p>
  ,
},

{
  id: 31,
  name: "  multipurpose box",
  image: multipurposeBox,
  price: 150,
  description:<p>Organize your essentials in style with our durable <b>Multipurpose Box</b>. Designed for <b>versatility</b>, this box is perfect for storing <b>gifts, accessories, stationery, jewelry,</b> or <b>small household items</b>.

  <p>Featuring a <b>sturdy build</b> and a <b>secure lid</b>, it keeps your belongings <b>safe</b> while adding a touch of <b>elegance</b> to your space. Its <b>lightweight</b> and <b>portable design</b> make it ideal for <b>home, office,</b> or <b>travel</b> use.</p>
  
  <p>Whether for <b>storage, gifting,</b> or <b>decoration</b>, our multipurpose box is a <b>practical</b> and <b>stylish solution</b> for all your needs!</p>   </p>,
  info: <p><b>Product Information</b>

  <p>Keep your essentials organized with our <b>Multipurpose Box</b>, designed for style, durability, and versatility. Perfect for storing gifts, accessories, stationery, jewelry, and other small items, it adds both functionality and elegance to any space.</p>  
  
  <p><b>Key Features:</b></p>  
  <ul>  
    <li><b>Strong & Durable</b> – Made from high-quality materials for long-lasting use</li>  
    <li><b>Spacious & Versatile</b> – Ideal for organizing small essentials like gifts, accessories, and stationery</li>  
    <li><b>Secure & Portable</b> – Features a sturdy build and a secure lid to keep items safe</li>  
    <li><b>Minimalist & Elegant Design</b> – Complements any home or office decor</li>  
  </ul>  
  
  <p>Perfect for storage, gifting, home organization, and decoration!</p></p>
  ,
},

{
  id: 32,
  name: " packing Bag",
  image: bag,
  price: 150,
  description:<p>Secure and stylish, our <b>Packaging Box</b> is perfect for gifting, shipping, and product packaging. Designed for durability and elegance, it ensures your items stay protected and well-presented.  

  <p>Made from <b>high-quality, eco-friendly materials</b>, this box is sturdy, customizable, and ideal for various uses, including retail, e-commerce, and personal packaging.</p>  
  
  <p>Perfect for businesses, events, and special occasions!</p></p>,
  info: <p><b>Product Information</b>

  <p>Go green with our <b>Eco-Friendly Paper Bags</b>, perfect for shopping, gifting, and packaging. Sturdy, biodegradable, and stylish!</p>  
  
  <p><b>Key Features:</b></p>  
  <ul>  
    <li><b>100% Recyclable</b> – Sustainable and biodegradable</li>  
    <li><b>Strong & Durable</b> – Handles various items with ease</li>  
    <li><b>Versatile Use</b> – Ideal for shopping, gifting, and storage</li>  
    <li><b>Customizable</b> – Available in various sizes and designs</li>  
  </ul>  
  
  <p>Perfect for eco-conscious shoppers, retail stores, and special occasions!</p></p>
  ,
},

{
  id: 33,
  name: "  fast food box",
  image: fastfoodBox,
  price: 150,
  description:<p>Keep your fast food fresh and secure with our <b>Fast Food Box</b>. Designed for convenience, it is sturdy, eco-friendly, and perfect for takeout, deliveries, and food packaging. 

  <p>Made from <b>food-grade, biodegradable materials</b>, this box is grease-resistant, leak-proof, and keeps meals intact during transport. Ideal for burgers, fries, sandwiches, and more.</p>  
  
  <p>Perfect for restaurants, cafes, food trucks, and takeout services!</p></p>,
  info:<p><b>Product Information</b>

  <p>Keep food fresh with our <b>Fast Food Box</b>, perfect for burgers, fries, and takeout. Sturdy, eco-friendly, and leak-proof!</p>  
  
  <p><b>Key Features:</b></p>  
  <ul>  
    <li><b>Eco-Friendly & Food-Grade</b> – Safe, biodegradable, and grease-resistant</li>  
    <li><b>Strong & Secure</b> – Prevents leaks and keeps food intact</li>  
    <li><b>Convenient & Portable</b> – Ideal for takeout and deliveries</li>  
    <li><b>Customizable</b> – Various sizes with branding options</li>  
  </ul>  
  
  <p>Perfect for restaurants, cafes, and food trucks!</p></p>,
},
  
{
  id: 34,
  name: "bowl",
  image: compartmentBowl,
  price: 150,
  description: <p>Keep your meals fresh and organized with our <b>Compartment Bowl</b>. Designed for convenience, it features divided sections to separate different food items, making it perfect for meal prep, takeout, and food delivery.

  <p>Made from <b>food-grade, eco-friendly materials</b>, this bowl is durable, leak-resistant, and suitable for both hot and cold foods. Whether you're packing a healthy lunch, serving a balanced meal, or ensuring portion control, our compartment bowl is the ideal choice.</p>  
  
  <p>Perfect for restaurants, catering, meal prep, and on-the-go dining!</p></p> ,
  info: <p><b>Product Information</b>

  <p>Enjoy mess-free meals with our <b>Compartment Bowl</b>, designed to keep food items separate and fresh. Ideal for takeout, meal prep, and serving.</p>  
  
  <p><b>Key Features:</b></p>  
  <ul>  
    <li><b>Food-Grade & Eco-Friendly</b> – Made from safe, biodegradable materials</li>  
    <li><b>Divided Sections</b> – Keeps flavors and portions separate</li>  
    <li><b>Durable & Leak-Resistant</b> – Suitable for hot and cold foods</li>  
    <li><b>Convenient & Portable</b> – Perfect for takeout, catering, and meal prep</li>  
  </ul>  
  
  <p>Great for restaurants, food deliveries, and home use!</p></p>,
},
  
  
];

export const mockData = [
  {
    id:22,
    name: "glass jars",
    image: jars,
    price: 150,
    description: "is ma yeh likh  mock data madena ha k kia kia include ha",
    info: "is ma likhna ha why we use it",
  },
  {

    id: 28,
    name: " steel bottel",
    image: steelbottle,
    price: 150,
    description: "is ma yeh likh  mock data madena ha k kia kia include ha",
    info: "is ma likhna ha why we use it",
  },
   
{
  id: 34,
  name: "   bowl",
  image: compartmentBowl,
  price: 150,
  description: "is ma yeh likh  mock data madena ha k kia kia include ha",
  info: "is ma likhna ha why we use it",
},
 
  {
    id: 29,
    name: "  spoon set",
    image: spoonset,
    price: 150,
    description: "is ma yeh likh  mock data madena ha k kia kia include ha",
    info: "is ma likhna ha why we use it",
  },
  
  {
    id: 30,
    name: "  Knotted skewers",
    image: knottedSkewers,
    price: 150,
    description: "is ma yeh likh  mock data madena ha k kia kia include ha",
    info: "is ma likhna ha why we use it",
  },
 {
        id: 41,
        image: brush,
        name: "tooth brush",
        price: "750",
      },
      {
        id: 42,
        image: organicsoap,
        name: "Organic soap",
        price: "750",
      },
      
            {
              id: 45,
              image: miswak,
              name: "Miswak",
              price: "750",
            },  
            {
               id: 72,
               image: airPurifier,
               name: "Natural Purifier",
               price: 700,
               description: (
                 <p>
                   <p>
                     Purify your space naturally with our <b>Air-Purifying Plants</b>.
                     These green companions filter toxins, improve air quality, and add a
                     refreshing touch to your home or office. Low-maintenance and stylish,
                     they enhance well-being while reducing indoor pollutants.
                   </p>
           
                   <p>Perfect for a healthier and greener environment!</p>
                 </p>
               ),
               info: (
                 <p>
                   <p>
                     <b>Product Information</b>
                   </p>
           
                   <p>
                     Improve your indoor air naturally with our <b>Air-Purifying Plants</b>
                     . These low-maintenance plants help filter toxins, boost oxygen
                     levels, and add a refreshing touch to any space.
                   </p>
           
                   <p>
                     <b>Key Features:</b>
                   </p>
                   <ul>
                     <li>
                       <b>Natural Air Purifier</b> – Removes toxins and improves air
                       quality
                     </li>
                     <li>
                       <b>Low Maintenance</b> – Easy to care for with minimal watering
                     </li>
                     <li>
                       <b>Enhances Well-Being</b> – Promotes relaxation and reduces stress
                     </li>
                     <li>
                       <b>Perfect for Any Space</b> – Ideal for homes, offices, and indoor
                       settings
                     </li>
                   </ul>
           
                   <p>Bring nature indoors for a healthier and fresher environment!</p>
                 </p>
               ),
             },
            {
              id :112,
              image:"https://bamboopecker.com/cdn/shop/files/Bamboopecker-bamboo-bamboochair-diningchair-bamboodiningchair-diningchair.jpg?v=1711608492&width=823",
              name:"Dining Chair",
              description:<p>Handcrafted with premium rattan poles and shining cane, this bohemian-styled rattan dining chair embodies sustainability and elegance. Perfectly paired with a rattan or wooden dining table, it adds a touch of eco-friendly sophistication to any dining space.    </p>,
              info:<p><b>Key features</b>
              <li><b>Handcrafted – </b>Artisan-made with attention to detail.</li>
              <li><b>Natural Materials – </b>Eco-friendly and sustainable.</li>
              <li><b>Comfortable Seating – </b>Designed for long meals and conversations.</li>
              <li><b>Sturdy & Durable –</b>Built to last with strong construction.</li>
              <li><b>Timeless Design –</b>Complements any dining setup.</li></p>,
              price:' 8,995.00'
            },
              {
                    id: 48,
                    image: hairremover,
                    name: " Hair Remover", 
                    price: "650",
                    description:<p>Effortlessly remove unwanted hair with our <b>Stone Hair Remover</b>, a natural and reusable solution for smooth skin. Designed for gentle exfoliation, it removes hair while leaving your skin soft and refreshed.
                    <p>Made from <b>high-quality, skin-safe materials</b>, this eco-friendly tool is easy to use, pain-free, and perfect for long-term use.</p>  
                    
                    <p>Ideal for arms, legs, and body care!</p></p>,
                    info:<p><b>Product Information</b>
            
                    <p>Experience a painless and eco-friendly way to remove unwanted hair with our <b>Hair Remover Stone</b>. Designed for gentle exfoliation, it leaves your skin smooth and refreshed without irritation.</p>  
                    
                    <p><b>Key Features:</b></p>  
                    <ul>  
                      <li><b>Natural & Reusable</b> – Made from high-quality materials for long-term use</li>  
                      <li><b>Painless & Gentle</b> – Removes hair while exfoliating dead skin cells</li>  
                      <li><b>Eco-Friendly & Chemical-Free</b> – A sustainable alternative to razors and wax</li>  
                      <li><b>Suitable for Various Body Areas</b> – Ideal for arms, legs, and more</li>  
                    </ul>  
                    
                    <p>Perfect for smooth, hair-free skin anytime!</p></p>                
                  },
            {
                id: 71,
                image: Bag,
                name: "Friendly Bag",
                price: 150,
                description: (
                  <p>
                    Carry in style with our <b>Eco-Friendly Cloth Bag</b>, made from durable
                    and reusable fabric. Perfect for shopping, travel, and daily use, it’s a
                    sustainable alternative to plastic bags. Lightweight, foldable, and
                    sturdy, this bag is designed for convenience and long-term use.
                    <p>Perfect for an eco-conscious lifestyle!</p>
                  </p>
                ),
                info: (
                  <p>
                    <p>
                      <b>Product Information</b>
                    </p>
            
                    <p>
                      Switch to sustainability with our <b>Eco-Friendly Cloth Bag</b>, a
                      durable and reusable alternative to plastic bags. Perfect for
                      shopping, travel, and daily use.
                    </p>
            
                    <p>
                      <b>Key Features:</b>
                    </p>
                    <ul>
                      <li>
                        <b>Durable & Reusable</b> – Made from strong, long-lasting fabric
                      </li>
                      <li>
                        <b>Eco-Friendly</b> – A sustainable choice for reducing plastic
                        waste
                      </li>
                      <li>
                        <b>Lightweight & Foldable</b> – Easy to carry and store
                      </li>
                      <li>
                        <b>Versatile Use</b> – Ideal for groceries, shopping, and more
                      </li>
                    </ul>
            
                    <p>Perfect for an eco-conscious lifestyle!</p>
                  </p>
                ),
              },
               {
                  id: 75,
                  image: candles,
                  name: "Candles",
                  price: 324,
                  description: (
                    <p>
                      <p>
                        Create a warm and relaxing atmosphere with our{" "}
                        <b>Eco-Friendly Candles</b>. Made from natural wax, these candles burn
                        cleanly, releasing a soothing fragrance while reducing toxins. Perfect
                        for home décor, meditation, or special occasions.
                      </p>
              
                      <p>Light up your moments with sustainability and elegance!</p>
                    </p>
                  ),
                  info: (
                    <p>
                      <p>
                        <b>Product Information</b>
                      </p>
              
                      <p>
                        Set the mood with our <b>Eco-Friendly Candles</b>, crafted from
                        natural wax for a clean and long-lasting burn. These candles add
                        warmth, fragrance, and elegance to any space, making them perfect for
                        relaxation and special occasions.
                      </p>
              
                      <p>
                        <b>Key Features:</b>
                      </p>
                      <ul>
                        <li>
                          <b>Natural & Non-Toxic</b> – Made from eco-friendly wax for a clean
                          burn
                        </li>
                        <li>
                          <b>Long-Lasting</b> – Provides extended burn time for lasting
                          ambiance
                        </li>
                        <li>
                          <b>Soothing Aroma</b> – Available in calming and refreshing scents
                        </li>
                        <li>
                          <b>Perfect for Any Occasion</b> – Great for home décor, meditation,
                          and gifting
                        </li>
                      </ul>
              
                      <p>Light up your space with elegance and sustainability!</p>
                    </p>
                  ),
                },
                {
                  id :114,
                  image:"https://bamboopecker.com/cdn/shop/files/Bamboopecker-bamboo-bamboochair-bambooloungechair-bamboopatiochair-rachanaloungechair.jpg?v=1721200127&width=533",
                  name:"Lounge chair",
                  description:<p>Elevate your living space with the timeless charm and natural elegance of our Bamboo Rachana Lounge Chair. Expertly handcrafted by skilled artisans, each chair combines meticulous craftsmanship with exceptional comfort, enhancing the aesthetic appeal of any setting. Constructed from eco-friendly bamboo, this lounge chair not only offers superior quality and unique detail but also supports sustainable living practices, minimizing environmental impact.</p>,
                  info:<p><b>Key features</b>
                 <li><b>Ergonomic Design</b> – Comfortably shaped for relaxation.</li>
              <li><b>High-Quality Materials</b> – Built to last with premium, sustainable materials.</li>
              <li><b>Stylish Look</b> – Modern design that fits any interior.</li>
              <li><b>Sturdy Frame</b> – Strong and durable construction.</li>
              <li><b>Versatile Use</b> – Perfect for lounging, reading, or relaxing.</li>
              </p>,
                  price:' 39,450.00'
                },
                {
                  id :111,
                  image:"https://bamboopecker.com/cdn/shop/files/Bamboopecker-IshanyaCoffeetable-Coffeetable-table-outdoor-bamboo-bamboowinnow-woven-handcrafted-natural_3.jpg?v=1718458326&width=823",
                  name:"Coffee table",
                  description:<p>Introducing our EcoHarmony Bamboo Side Table, a sustainable masterpiece that seamlessly blends functionality with the beauty of nature. This unique handcrafted side table is made with bamboo legs, providing a sturdy and eco-friendly foundation, while the table top is ingeniously designed using a bamboo winnow, creating a harmonious union of traditional craftsmanship and modern utility.</p>,
                  info:<p><b>Key features</b>
                  <li><b>Handcrafted – </b>Made by skilled artisans for a unique touch.</li>
                  <li><b>Natural Material –</b>Sustainable and eco-friendly design.</li>
                  <li><b>Sturdy Build – </b> Strong base for everyday use.</li>
                  <li><b>Minimal Design –</b>Blends with any interior style.</li>
                  <li><b>Functional – </b>Perfect for coffee, books, or décor.</li></p>,
                  price:' 4,120.00'
                },
]