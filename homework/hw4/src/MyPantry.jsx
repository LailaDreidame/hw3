// Homework 4, Part 2 -- your pantry. This is the file you build.
// Open http://127.0.0.1:5173/ to see it. The five TODOs are the five graded requirements.
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

// One card per product. Same as drill 11's PantryCard, plus a Remove button.
function PantryCard({ name, count, onAdd, onRemove }) {
  return <Card>
    <CardHeader><CardTitle>{name}</CardTitle></CardHeader>
    <CardContent><p>Quantity: {count}</p></CardContent>
    <CardFooter className="gap-2">
      <Button variant="secondary" onClick={onAdd}>Add one</Button>
      <Button variant="outline" onClick={onRemove}>Remove</Button>
    </CardFooter>
  </Card>;
}

export default function MyPantry() {
  const [products, setProducts] = useState([
    { id: 'a', name: 'Apples', quantity: 0 },
    { id: 'r', name: 'Rice', quantity: 0 },
    { id: 'b', name: 'Beans', quantity: 0 },
  ]);
  const [newName, setNewName] = useState('');

  // Build a new array where only the matching product gets a new quantity.
  function addOne(id) {
    setProducts(prev => prev.map(p =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ));
  }

  function removeProduct(id) {
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  function addProduct(e) {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;
    setProducts(prev => [...prev, { id: crypto.randomUUID(), name, quantity: 0 }]);
    setNewName('');
  }

  // Computed from products on every render, so it can never go stale.
  const total = products.reduce((sum, p) => sum + p.quantity, 0);

  return <main className="mx-auto max-w-4xl space-y-6 p-4 sm:p-8">
    <h1 className="text-3xl font-bold">My Pantry</h1>
    <p>Total items: {total}</p>

    <form className="flex items-end gap-2" onSubmit={addProduct}>
      <div className="flex-1 space-y-2">
        <label htmlFor="new-product">New product</label>
        <Input id="new-product" value={newName} onChange={e => setNewName(e.target.value)} />
      </div>
      <Button type="submit">Add product</Button>
    </form>

    <div className="grid gap-4 md:grid-cols-3">
      {products.map(product => (
        <PantryCard
          key={product.id}
          name={product.name}
          count={product.quantity}
          onAdd={() => addOne(product.id)}
          onRemove={() => removeProduct(product.id)}
        />
      ))}
    </div>
  </main>;
}
