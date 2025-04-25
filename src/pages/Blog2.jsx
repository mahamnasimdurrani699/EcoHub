import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Blog2 = () => {
  const handleClick = () => {
    window.open("https://wa.me/+92311223344"); // External link
  };

  return (
    <div className="bg-primary min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-lightBackground p-8 rounded-lg shadow-lg border border-accent">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-secondary">Eco-Friendly Skincare and Cleaning Habits: A Sustainable Approach</h1>
          <p className="text-lg text-accent mt-2">By Syeda Aiza Fatima · December 29, 2024</p>
        </header>

        <article className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-accent">Introduction: Why Sustainability Matters in Skincare and Cleaning</h2>
            <p>
              In today’s fast-paced world, sustainability has become more than just a trend; it is now an essential part of our daily lives. Eco-friendly skincare and cleaning products are gaining popularity as more individuals seek to reduce their environmental impact. These products are made from renewable resources, use biodegradable ingredients, and often come with minimal or recyclable packaging.
            </p>
            <p>
              The skincare industry, for example, is notorious for relying heavily on chemical-laden products that often do more harm than good. Many traditional skincare products contain parabens, sulfates, and synthetic fragrances, all of which can irritate the skin and contribute to long-term health risks. When it comes to cleaning products, most contain harsh chemicals that not only affect your health but also contribute to environmental pollution. 
            </p>
            <p>
              The shift to eco-friendly alternatives provides an opportunity for individuals to make more informed choices that benefit both their well-being and the planet. Understanding the difference between eco-friendly and non-eco-friendly products is key to fostering long-term sustainability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent">Eco-Friendly vs. Non-Eco-Friendly Skincare & Cleaning Products</h2>
            <p>
              Let’s take a deeper look into the fundamental differences between eco-friendly and non-eco-friendly skincare and cleaning products. The main distinction lies in the ingredients, production methods, packaging, and overall environmental impact. Understanding these aspects helps you make more conscious and responsible choices.
            </p>
            <table className="w-full text-left border-collapse border border-accent mt-4">
              <thead>
                <tr className="bg-accent">
                  <th className="border border-accent px-4 py-2">Aspect</th>
                  <th className="border border-accent px-4 py-2">Eco-Friendly Products</th>
                  <th className="border border-accent px-4 py-2">Non-Eco-Friendly Products</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-accent px-4 py-2">Ingredients</td>
                  <td className="border border-accent px-4 py-2">Natural, organic, non-toxic, and cruelty-free ingredients</td>
                  <td className="border border-accent px-4 py-2">Synthetic chemicals, preservatives, and artificial fragrances that may cause skin irritation or health issues</td>
                </tr>
                <tr className="bg-lightBackground">
                  <td className="border border-accent px-4 py-2">Packaging</td>
                  <td className="border border-accent px-4 py-2">Sustainably sourced, recyclable, compostable, and often minimalistic</td>
                  <td className="border border-accent px-4 py-2">Excessive plastic, non-recyclable, single-use packaging contributing to waste and landfill accumulation</td>
                </tr>
                <tr>
                  <td className="border border-accent px-4 py-2">Environmental Impact</td>
                  <td className="border border-accent px-4 py-2">Low carbon footprint, biodegradable, environmentally-friendly production</td>
                  <td className="border border-accent px-4 py-2">High environmental cost, releases pollutants into air and water during production</td>
                </tr>
                <tr className="bg-lightBackground">
                  <td className="border border-accent px-4 py-2">Health Impact</td>
                  <td className="border border-accent px-4 py-2">Free from toxic chemicals, gentle on skin, suitable for sensitive skin types</td>
                  <td className="border border-accent px-4 py-2">Potentially harmful ingredients that can irritate or damage the skin and cause allergic reactions</td>
                </tr>
                <tr>
                  <td className="border border-accent px-4 py-2">Cruelty-Free</td>
                  <td className="border border-accent px-4 py-2">Ethically produced, not tested on animals, supports humane practices</td>
                  <td className="border border-accent px-4 py-2">May involve animal testing or exploitation during manufacturing</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent">The Benefits of Eco-Friendly Skincare and Cleaning Habits</h2>
            <p>
              The benefits of adopting eco-friendly skincare and cleaning habits are far-reaching. Not only do they improve your health, but they also contribute to environmental conservation. Let’s explore some of these advantages:
            </p>
            <ul className="list-disc pl-8">
              <li><strong>Safer for Your Skin:</strong> Natural and organic skincare products are gentle on the skin, reducing the risk of irritation or allergic reactions. Many eco-friendly products are also free of parabens, sulfates, and phthalates, which are commonly found in conventional beauty products and may cause long-term health issues.</li>
              <li><strong>Environmentally Responsible:</strong> By opting for products with minimal packaging or biodegradable materials, you are helping reduce the waste in landfills. Eco-friendly cleaning products, for instance, often come in reusable containers or have refillable options, reducing the amount of single-use plastic.</li>
              <li><strong>Supporting Ethical Brands:</strong> Many eco-friendly brands focus on ethical sourcing and sustainable practices. By supporting these brands, you are contributing to a more responsible and transparent beauty and cleaning industry.</li>
              <li><strong>Promotes a Sustainable Future:</strong> By choosing products with environmentally-friendly ingredients and packaging, you are encouraging businesses to innovate and adopt greener practices, which leads to a more sustainable future for all.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent">How to Transition to Eco-Friendly Skincare and Cleaning Habits</h2>
            <p>
              Transitioning to eco-friendly skincare and cleaning habits doesn’t require a complete overhaul of your daily routines. Instead, you can make simple yet impactful changes that lead to long-term benefits for you and the environment. Here are some tips to help you make the switch:
            </p>
            <ul className="list-disc pl-8">
              <li><strong>Start with Skincare:</strong> Begin by replacing products such as your face wash, moisturizer, and body lotion with eco-friendly alternatives that are made from natural, organic ingredients. Look for brands that use glass or cardboard packaging to reduce plastic waste.</li>
              <li><strong>Switch to Sustainable Cleaning Products:</strong> Use non-toxic, biodegradable cleaning products in your home. Opt for products with natural ingredients such as vinegar, baking soda, and essential oils that are both effective and safe for the environment.</li>
              <li><strong>Eliminate Single-Use Plastics:</strong> Switch to reusable cotton pads, bamboo toothbrushes, and refillable containers. Reducing your dependence on single-use plastics is one of the easiest ways to minimize your environmental impact.</li>
              <li><strong>Educate Yourself:</strong> Read product labels carefully and research brands that are committed to sustainability. Look for certifications such as USDA Organic, Fair Trade, or cruelty-free logos to ensure the products align with your values.</li>
              <li><strong>Incorporate Eco-Friendly Practices Gradually:</strong> Small, gradual changes will ensure that you do not feel overwhelmed. Start by swapping one product at a time and slowly replace the rest once you finish using conventional items.</li>
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

export default Blog2;
