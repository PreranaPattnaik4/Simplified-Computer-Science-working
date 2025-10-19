'use client';

import { useState, useEffect } from 'react';
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  type QueryConstraint,
} from 'firebase/firestore';
import { db } from '@/lib/firebase/client';

type FirestoreStreamOptions = {
  orderBy?: [string, 'asc' | 'desc'];
  where?: [string, '==' | '!=' | '<' | '<=' | '>' | '>=', any][];
};

export function useFirestoreStream<T>(
  collectionName: string,
  initialData: T[],
  options: FirestoreStreamOptions = {}
): T[] {
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    const constraints: QueryConstraint[] = [];
    if (options.orderBy) {
      constraints.push(orderBy(options.orderBy[0], options.orderBy[1]));
    }
    if (options.where) {
      options.where.forEach(w => constraints.push(where(w[0], w[1], w[2])));
    }

    const q = query(collection(db, collectionName), ...constraints);

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            ...docData,
            id: doc.id,
            // Convert Firestore Timestamps to serializable format (ISO string)
            ...Object.fromEntries(
              Object.entries(docData).map(([key, value]) => 
                value?.toDate ? [key, value.toDate().toISOString()] : [key, value]
              )
            ),
          } as T;
        });
        setData(newData);
      },
      (error) => {
        console.error(`Error listening to ${collectionName}:`, error);
      }
    );

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName]);

  return data;
}
