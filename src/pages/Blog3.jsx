import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Blog3= () => {
  const handleClick = () => {
    window.open("https://wa.me/+92311223344"); // External link
  };

  return (
    <div className="bg-primary min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-lightBackground p-8 rounded-lg shadow-lg border border-accent">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-secondary">How to Choose Products Made from Sustainable Materials</h1>
          <p className="text-lg text-accent mt-2">By Syeda Aiza Fatima · December 29, 2024</p>
        </header>

        <article className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-accent">Introduction: Why Choosing Sustainable Products Matters</h2>
            <p>
              In today’s environmentally-conscious world, making informed decisions about the products we purchase has never been more important. Choosing products made from sustainable materials not only helps reduce environmental impact but also supports ethical practices in production.
            </p>
            <p>
              Sustainable products are designed to minimize harm to the environment, utilizing renewable, biodegradable, and eco-friendly materials. By shifting our purchasing habits towards these products, we contribute to a healthier planet and promote sustainability for future generations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent">What Makes a Product Sustainable?</h2>
            <p>
              A product is considered sustainable if it has been made with materials and processes that minimize negative environmental impact throughout its lifecycle. Sustainable products are generally made from renewable resources, have a low carbon footprint, and are designed for durability and recyclability.
            </p>
            <p>
              Examples include products made from organic cotton, bamboo, recycled materials, and non-toxic chemicals. These materials can be sourced responsibly, ensuring minimal disruption to natural ecosystems and reducing the reliance on finite resources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent">How to Choose Products Made from Sustainable Materials</h2>
            <p>
              When shopping for products, here are some key factors to look for to ensure they are made from sustainable materials:
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li><strong>Look for Certifications:</strong> Seek out eco-certifications like Fair Trade, USDA Organic, Global Organic Textile Standard (GOTS), and FSC (Forest Stewardship Council). These labels confirm that the product is made with sustainable materials and ethical practices.</li>
              <li><strong>Check for Recycled Content:</strong> Many products now incorporate recycled materials, such as plastic bottles, paper, and fabric. Look for items that are made with a high percentage of recycled content to reduce waste and the need for virgin resources.</li>
              <li><strong>Consider Durability:</strong> Choose products that are built to last. Items that are durable and can be reused multiple times, such as stainless steel water bottles or cloth bags, reduce the need for frequent replacements and minimize waste.</li>
              <li><strong>Research Brand Practices:</strong> Research the brands you buy from. Do they prioritize ethical sourcing and sustainability? Choose companies that disclose information about their materials and manufacturing processes.</li>
              <li><strong>Understand the Materials:</strong> Familiarize yourself with the materials used in products. Opt for natural, organic fibers like cotton, hemp, or wool, as these are biodegradable and renewable. Avoid products made from synthetic materials like polyester or nylon, which are derived from petroleum and do not biodegrade.</li>
              <li><strong>Assess Packaging:</strong> Sustainable products often come with minimal or recyclable packaging. Look for products that use biodegradable, glass, or paper packaging over plastic packaging that can contribute to pollution.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent">Benefits of Choosing Sustainable Products</h2>
            <p>
              By opting for products made from sustainable materials, you contribute to reducing environmental pollution, conserving resources, and promoting ethical manufacturing practices. Here are some key benefits:
            </p>
            <ul className="list-disc pl-8">
              <li><strong>Reduce Waste:</strong> Sustainable products are often designed for reuse or recycling, which helps reduce the amount of waste sent to landfills.</li>
              <li><strong>Conserve Resources:</strong> Choosing renewable materials like bamboo or organic cotton helps preserve natural resources and reduces the dependence on non-renewable ones.</li>
              <li><strong>Support Ethical Practices:</strong> Many sustainable brands focus on fair wages and good working conditions for their workers, ensuring that their supply chain is transparent and responsible.</li>
              <li><strong>Lower Carbon Footprint:</strong> Sustainable products are often produced with low-emission processes, reducing their overall impact on climate change.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent">How to Transition to a Sustainable Lifestyle</h2>
            <p>
              Making the switch to a sustainable lifestyle is simple when you take small, thoughtful steps. Here are some tips to help you begin:
            </p>
            <ul className="list-disc pl-8">
              <li><strong>Start Small:</strong> Replace one product at a time, starting with those you use frequently, such as toiletries or kitchen items.</li>
              <li><strong>Educate Yourself:</strong> Research sustainable alternatives for products you use regularly, like biodegradable cleaning products, reusable shopping bags, and eco-friendly clothing.</li>
              <li><strong>Prioritize Long-Term Use:</strong> Opt for quality over quantity. Invest in durable items that you can use for years rather than disposable products.</li>
              <li><strong>Reduce, Reuse, Recycle:</strong> Consider buying second-hand products, reusing containers, and recycling old items when possible.</li>
            </ul>
          </section>
        </article>

        <footer className="mt-8">
          <p className="text-center text-accent text-sm">
            © 2024 EcoHub. All rights reserved.
          </p>
        </footer>
      </div>

      {/* WhatsApp Contact Button */}
      <div className="fixed bottom-4 right-4">
        <div
          onClick={handleClick}
          className="flex items-center justify-center cursor-pointer hover:scale-110"
        >
          <FaWhatsapp className="text-accent w-12 h-12 hover:text-darkAccent"></FaWhatsapp>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
