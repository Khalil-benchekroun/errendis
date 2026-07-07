'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function SearchClient({ index }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      )
      .slice(0, 30);
  }, [query, index]);

  return (
    <div>
      <div className="search-box-wrap">
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un produit, un terme, un article..."
          className="search-input"
        />
      </div>

      {query.trim().length >= 2 && (
        <p className="search-count">
          {results.length} résultat{results.length !== 1 ? 's' : ''} pour « {query} »
        </p>
      )}

      <div className="search-results">
        {results.map((r) => (
          <Link key={r.url + r.title} href={r.url} className="search-result">
            <span className="search-result-type">{r.type}</span>
            <strong>{r.title}</strong>
            <p>{r.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
