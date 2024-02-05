import React,{useState} from 'react'
import {Message,useToaster} from "rsuite";
import Heading from '../../Component/comon/Heading/Heading'
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    const navigate = useNavigate();
    const toaster = useToaster();
    const [image2, setImage] = useState(null);
    const [validation, setValidation] = useState(false);
    const [check, setCheck] = useState({
        Categories: "",
        Description: "",
        ProductsName:"",
        ProductsPrice:"",
        Productsquantity:"",
        image:"",

    });
    const handelValue = (e) => {

        setCheck({ ...check, [e.target.name]: e.target.value });

    };
  return (
    <main className='main-container'>
        <Heading
        heading={"Products"}
        navigateTo={"/products"}
        BreadcrumbMain={"Products"}
        />
         <div className="shadow-sm p-sm-4 extrapd"
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12"><br />
                        <div className="text_react">
                            <h3>Products</h3>
                        </div>

                    </div>
                    <div className="col-6"></div>
                    <div className="col-lg-2 col-md-6 col-sm-12">  <br />
                        <button type="button" style={{
                            backgroundColor: '#4b97ca',
                            border: 'none',
                            color: 'white',
                            padding: '6.5px',
                            textalign: 'c',
                            textdecoration: 'none',
                            display: 'inline-block',
                            fontsize: '16px',
                            borderRadius: "7px",
                            width: "100%"
                        }} onClick={() => navigate("/products")}>Show Products</button>
                    </div>
                </div>
                <div className="row p-0 m-0 justify-content-between mt-3 ">
                <div className="has-validation col-md-6 col-12 py-0 px-2 my-sm-0 my-2">
                <label className="form-label fw-bold text-dark" >
                    Products Name :
                    </label>
                    <input
                        name="ProductsName"
                        value={check.ProductsName}
                        onChange={handelValue}
                        id="groupName"
                        placeholder="Categories..."
                        className="w-100 text-dark  input-border-color form-control width-auto"
                    />
                 </div>
                <div className="has-validation col-md-6 col-12 py-0 px-2 my-sm-0 my-2">
                <label className="form-label fw-bold text-dark" >
                    Products Price :
                    </label>
                    <input
                        name="ProductsPrice"
                        value={check.ProductsPrice}
                        onChange={handelValue}
                        id="groupName"
                        placeholder="Categories..."
                        className="w-100 text-dark  input-border-color form-control width-auto"
                    />
                 </div>
                   
               </div>
                <div className="row p-0 m-0 justify-content-between mt-3 ">
                <div className="has-validation col-md-6 col-12 py-0 px-2 my-sm-0 my-2">
                <label className="form-label fw-bold text-dark" >
                    Products Quantity :
                    </label>
                    <input
                        name="Productsquantity"
                        value={check.Productsquantity}
                        onChange={handelValue}
                        id="groupName"
                        placeholder="Categories..."
                        className="w-100 text-dark  input-border-color form-control width-auto"
                    />
                 </div>
                <div className="has-validation col-md-6 col-12 py-0 px-2 my-sm-0 my-2">
                <label className="form-label fw-bold text-dark" >
                    Products Categories :
                    </label>
                    <select
                        name="Productsquantity"
                        value={check.Productsquantity}
                        onChange={handelValue}
                        id="groupName"
                        placeholder="Categories..."
                        className="w-100 text-dark  input-border-color form-control width-auto"
                    >
                <option>Select Categories</option>

                    </select>
                 </div>
                   
               </div>
                <div className="row p-0 m-0 justify-content-between mt-3 ">
                <div className="has-validation col-md-6 col-12 py-0 px-2 my-sm-0 my-2">
                <label
                  htmlFor="newsName"
                  className="form-label fw-bold text-dark"
                >
                  Image : 
                </label>
                <input
                      type="file"
                      className="w-100 text-dark  input-border-color form-control width-auto"
                                        
                    />   
                 </div>
              
                <div className="has-validation col-md-6 col-12 py-0 px-2 my-sm-0 my-2">
                             

                <label className="form-label fw-bold text-dark" >
                        Description :
                    </label>
                    <textarea
                        name="Description"
                        value={check.Description}
                        onChange={handelValue}
                        id="groupName"
                        placeholder="Description..."
                        className="w-100 text-dark  input-border-color form-control width-auto"
                    />  
                  
                  
              
              
            
                   
                 </div>
                   
                 </div>
                 <div className="d-flex justify-content-center gap-2 mt-5">
              <button
                type="submit"
                appearance="primary"
                className="modal_close_btn"
                // onClick={() => {
                //   setValidation(true);
                // }}
              >
                Add Product
              </button>
              </div>
            </div>
          
        </main>
  )
}

export default React.memo(AddProduct) 