"use client";

import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { Button } from '@/components/ui/button';

const shopItems = [
  {
    title: "Mountain Landscape",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 299.99,
    shipping: 14.99
  },
  {
    title: "Serene Lake",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 249.99,
    shipping: 14.99
  },
  {
    title: "Autumn Forest",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 279.99,
    shipping: 14.99
  },
  {
    title: "Desert Dunes",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 229.99,
    shipping: 14.99
  },
  {
    title: "Tropical Beach",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 319.99,
    shipping: 14.99
  },
  {
    title: "Snowy Peaks",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    price: 289.99,
    shipping: 14.99
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <DirectionAwareHover imageUrl={item.imageUrl}>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg font-bold mb-1">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-200">+ ${item.shipping.toFixed(2)} shipping</p>
                </div>
              </DirectionAwareHover>
              <Button className="mt-4 w-full">Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}