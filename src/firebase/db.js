import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  limit,
} from "firebase/firestore";
import { db } from "./firebase-config";

/**
 * Custom hook to fetch data from Firestore
 * @param {string} collectionName - The name of the Firestore collection
 * @param {Object} options - Options for queries or real-time updates
 * @param {boolean} options.realtime - Whether to fetch data in real-time
 * @param {Array} options.conditions - Array of conditions for queries [field, operator, value]
 */
export const useGetData = (
  collectionName,
  options = { realtime: false, conditions: [], limit: null }
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collectionName) return;

    setLoading(true);

    const collectionReference = collection(db, collectionName);

    // Apply query conditions if provided
    const conditions = options.conditions || [];
    const q = conditions.length
      ? query(
          collectionReference,
          ...conditions.map(([field, operator, value]) =>
            where(field, operator, value)
          ),
          ...(options.limit ? [limit(options.limit)] : [])
        )
      : collectionReference;

    // Fetch data: Real-time or one-time
    const fetchData = options.realtime
      ? onSnapshot(
          q,
          (snapshot) => {
            setData(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
            setLoading(false);
          },
          (err) => {
            setError(err.message);
            setLoading(false);
          }
        )
      : getDocs(q)
          .then((snapshot) => {
            setData(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });

    // Cleanup for real-time updates
    return options.realtime ? fetchData : undefined;
  }, []);

  return { data, loading, error };
};
