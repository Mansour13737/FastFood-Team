import { products } from '@/data/products'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">فهرست محصولات</h1>
      <ul className=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <li key={p.id} className="border bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-600 mb-3">{p.description}</p>
              <p className="text-lg font-bold text-green-600 mb-3">{p.price.toFixed(2)} $</p>
              <Link
                href={`/products/${p.id}`}
                className="w-full block text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                جزییات
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}