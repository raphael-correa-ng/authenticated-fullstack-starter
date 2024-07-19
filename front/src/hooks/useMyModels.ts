import { useState, useEffect } from 'react';
import MyService, { MyModel } from '../services/MyService';

function useMyModels(myService: MyService): MyModel[] {
  const [myModels, setMyModels] = useState<MyModel[]>([]);

  useEffect(() => {
    const fetchAndSet = async () => {
      const myModels = await myService.getMyModels();
      setMyModels(myModels);
    };
    fetchAndSet();
  }, [myService]);

  return myModels;
}

export default useMyModels;
