import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

 export const ShoppingCartProvider = ({children}) => {

  /***************States***************/

    //state Shopping cart . increment quantity / . add products
    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    //state Shopping cart . Order
    const [order, setOrder] = useState([]);
    //state . Open product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    // state of . Product description
    const [productDescription, setProductDescription] = useState({});
    //state . Open checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    //Get products
    const [items, setItems] = useState();
    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState();
    //Get products filtered by title
    const [filteredItems, setFilteredItems] = useState();
    //Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    console.log(filteredItems)
    
    console.log(searchByCategory)
    
    /***************Functions***************/

    //Function to Open/Close product Detail
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    //Function to Open/Close checkout side menu
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Get products from API.

    useEffect(() => {
      fetch ('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
    }, [])
    

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      
      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }
    

      const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
          if (searchType === 'BY_TITLE') {
           return filteredItemsByTitle(items, searchByTitle)
          }

          if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
           }

           if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
           }

           if (!searchType) {
            return items
           }
      }

     
  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

      return (
        <ShoppingCartContext.Provider value= {{
          count,
          setCount, 
          openProductDetail,
          closeProductDetail, 
          isProductDetailOpen,
          productDescription,
          setProductDescription,
          cartProducts,
          setCartProducts,
          isCheckoutSideMenuOpen,
          setIsCheckoutSideMenuOpen,
          openCheckoutSideMenu,
          closeCheckoutSideMenu,
          order,
          setOrder,
          items,
          setItems,
          searchByTitle,
          setSearchByTitle,
          filteredItems,
          setFilteredItems,
          searchByCategory,
          setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
 };

