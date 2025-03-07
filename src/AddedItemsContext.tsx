import React, { createContext, useContext, useState, ReactNode } from 'react';

type AddedItemsContextType = {
  addedItems: number[];
  setAddedItems: React.Dispatch<React.SetStateAction<number[]>>;
  handleRemoveFromCart: (id: number) => void; 
  clearAddedItems: () => void; 
};

const AddedItemsContext = createContext<AddedItemsContextType | undefined>(undefined);

export const AddedItemsProvider = ({ children }: { children: ReactNode }) => {
  const [addedItems, setAddedItems] = useState<number[]>([]);

  
  const handleRemoveFromCart = (id: number) => {
    setAddedItems((prevItems) => prevItems.filter((itemId) => itemId !== id));
  };

 
  const clearAddedItems = () => {
    setAddedItems([]);
  };

  return (
    <AddedItemsContext.Provider value={{ addedItems, setAddedItems, handleRemoveFromCart, clearAddedItems }}>
      {children}
    </AddedItemsContext.Provider>
  );
};

export const useAddedItems = () => {
  const context = useContext(AddedItemsContext);
  if (!context) throw new Error('useAddedItems must be used within an AddedItemsProvider');
  return context;
};