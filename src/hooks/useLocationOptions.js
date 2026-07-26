import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

// The canonical state/city list is static, so one fetch is shared app-wide.
let cache = null;
let inflight = null;

function load() {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch(`${API_URL}/locations`)
      .then((res) => (res.ok ? res.json() : { states: [] }))
      .then((data) => {
        cache = Array.isArray(data?.states) ? data.states : [];
        return cache;
      })
      .catch(() => {
        inflight = null;
        return [];
      });
  }
  return inflight;
}

export function useLocationOptions() {
  const [states, setStates] = useState(cache || []);
  const [loading, setLoading] = useState(!cache);

  useEffect(() => {
    if (cache) return undefined;
    let active = true;
    load().then((list) => {
      if (!active) return;
      setStates(list);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return { states, loading };
}

export function citiesForState(states, stateName) {
  return states.find((s) => s.state === stateName)?.cities || [];
}
