import axios from "axios";
const URL = "http://localhost:8000";

export const authanticateSignup = async (data) => {
  try {
    const res = await axios.post(`${URL}/signup`, data);

    return res;
  } catch (error) {
    return error;
  }
};

export const authanticateLogin = async (data) => {
  try {
    const res = await axios.post(`${URL}/login`, data);

    return res;
  } catch (error) {
    return error;
  }
};


export const handlepayment = async (amount) => {
  try {
    const {
      data: { key },
    } = await axios.get(`http://localhost:8000/getkey`);
    const {
      data: { order },
    } = await axios.post("http://localhost:8000/payment", {
      amount,
    });
    var options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Dipanshu Verma",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/128663583?v=4",
      order_id: order.id,
      callback_url: "http://localhost:8000/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2874f0",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    console.log(error.message);
  }
};

export const handleCheckboxChangeForRating = (elm,products,filters,setFilters,setproductData,productheader) => {
    let checkedRating = 5;

    if (elm === "1★ & above") {
      checkedRating = 1;
    } else if (elm === "2★ & above") {
      checkedRating = 2;
    } else if (elm === "3★ & above") {
      checkedRating = 3;
    } else if (elm === "4★ & above") {
      checkedRating = 4;
    }

    setFilters({ ...filters, rating: checkedRating });

    let tag = localStorage.getItem("tag");
    let category = localStorage.getItem("category");
    const filteredData = products.filter(
      (elm) => elm.category === category || elm.tagline === tag
    );
    const oldData =  productheader? [...products]:[...filteredData];
    const selectedDiscount = filters.discount;
    const selectedColor = filters.color;
    const selectedSize = filters.size;

    const updatedData = oldData
      .filter((elm) => {
        const productDiscount = parseFloat(
          elm.price.discount.replace("% off", "")
        );
        if (selectedColor && selectedSize) {
          return (
            productDiscount >= selectedDiscount &&
            elm.rating >= checkedRating &&
            elm.size?.includes(selectedSize) &&
            elm.color === selectedColor
          );
        } else if (selectedColor) {
          return (
            productDiscount >= selectedDiscount &&
            elm.rating >= checkedRating &&
            elm.color === selectedColor
          );
        } else if (selectedSize) {
          return (
            productDiscount >= selectedDiscount &&
            elm.rating >= checkedRating &&
            elm.size?.includes(selectedSize)
          );
        } else {
          return (
            productDiscount >= selectedDiscount && elm.rating >= checkedRating
          );
        }
      })
      .sort((a, b) => a.rating - b.rating);
    setproductData(updatedData);
  };


  export const handleCheckboxChangeForDiscount=(elm,products,filters,setFilters,setproductData,productheader)=> {

    let discount = 80;

    if (elm === "30% off") {
      discount = 30;
    } else if (elm === "40% off") {
      discount = 40;
    } else if (elm == "50% off") {
      discount = 50;
    } else if (elm === "60% off") {
      discount = 60;
    } else if (elm === "70% off") {
      discount = 70;
    }
    setFilters({ ...filters, discount: discount });

    let tag = localStorage.getItem("tag");
    let category = localStorage.getItem("category");
    const filteredData = products.filter(
      (elm) => elm.category === category || elm.tagline === tag
    );

    const oldData =  productheader ? [...products]:[...filteredData];
    const selectedRating = filters.rating;
    const selectedColor = filters.color;
    const selectedSize = filters.size;

    const updatedData = oldData.filter((product) => {
      const productDiscount = parseFloat(
        product.price.discount.replace("% off", "")
      );
      if (selectedColor && selectedSize) {
        return (
          productDiscount >= discount &&
          product.rating >= selectedRating &&
          product.size?.includes(selectedSize) &&
          product.color === selectedColor
        );
      } else if (selectedColor) {
        return (
          productDiscount >= discount &&
          product.rating >= selectedRating &&
          product.color === selectedColor
        );
      } else if (selectedSize) {
        return (
          productDiscount >= discount &&
          product.rating >= selectedRating &&
          product.size?.includes(selectedSize)
        );
      } else {
        return productDiscount >= discount && product.rating >= selectedRating;
      }
    });

    setproductData(updatedData);
  }

  export const handleCheckboxChangeForSize=(elm,products,filters,setFilters,setproductData,productsData,productheader)=> {
    setFilters({ ...filters, size: elm });
    const choosedsize = elm;

    let tag = localStorage.getItem("tag");
    let category = localStorage.getItem("category");
    const filteredData = products.filter(
      (elm) => elm.category === category || elm.tagline === tag
    );

    const selectedRating = filters.rating;
    const selectedDiscount = filters.discount;
    const selectedColor = filters.color;

    const oldData =  productheader? [...products]:[...filteredData];

    const updatedData = oldData.filter((product) => {
      const productDiscount = parseFloat(
        product.price.discount.replace("% off", "")
      );

      if (selectedColor) {
        return (
          productDiscount >= selectedDiscount &&
          product.rating >= selectedRating &&
          product.size?.includes(choosedsize) &&
          product.color === selectedColor
        );
      } else {
        return (
          productDiscount >= selectedDiscount &&
          product.rating >= selectedRating &&
          product.size.includes(choosedsize)
        );
      }
    });

 
    
      setproductData(updatedData);
   
  }

  export function handleCheckboxChangeForColor(elm,products,filters,setFilters,setproductData,productsData,productheader) {
    setFilters({ ...filters, color: elm });
    const choosedColor = elm;

    let tag = localStorage.getItem("tag");
    let category = localStorage.getItem("category");
    const filteredData = products.filter(
      (elm) => elm.category === category || elm.tagline === tag
    );
    const selectedRating = filters.rating;
    const selectedDiscount = filters.discount;
    const selectedSize = filters.size;
    
    const oldData =  productheader?[...products]:[...filteredData];

    const updatedData = oldData.filter((product) => {
      const productDiscount = parseFloat(
        product.price.discount.replace("% off", "")
      );
      if (selectedSize) {
        return (
          productDiscount >= selectedDiscount &&
          product.rating >= selectedRating &&
          product.size?.includes(selectedSize) &&
          product.color === choosedColor
        );
      } else {
        return (
          productDiscount >= selectedDiscount &&
          product.rating >= selectedRating &&
          product.color === choosedColor
        );
      }
    });

    
      setproductData(updatedData);
   

  }