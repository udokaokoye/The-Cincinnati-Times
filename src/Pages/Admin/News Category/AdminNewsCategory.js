import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect} from "react";

import {getCategory} from "../../../APIs/get_category";
import "./AdminNewsCategory.css";
const AdminNewsCategory = () => {
    const [categoryName, setcategoryName] = useState('')
    const [categoryType, setcategoryType] = useState('')
    const [allCategories, setallCategories] = useState('')

    useEffect( async() => {
      const allCategoriess = await getCategory();

      setallCategories(allCategoriess)
    }, [])

    

    const addCategoryhandler = () => {
        const formData = new FormData;
        formData.append("category_name", categoryName)
        formData.append("category_type", categoryType)

        fetch("http://localhost/cincinnatitimes/add_category.php", {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            alert(data);
        })
    }
  return <div className="Admin_News_Category">
      <div className="admin_news_wrapper">
          <h1>News Categories</h1>

          <div className="allCategories">
              <div className="category_cont">
                  <p>Sports</p> <div className="icns"><FontAwesomeIcon icon={faPen} className='edit_icn' /> <FontAwesomeIcon icon={faTrash} className='del_icn' /></div>
              </div>

              <div className="category_cont">
                  <p>Entertainment</p> <div className="icns"><FontAwesomeIcon icon={faPen} className='edit_icn' /> <FontAwesomeIcon icon={faTrash} className='del_icn' /></div>
              </div>

              <div className="category_cont">
                  <p>Bussiness</p> <div className="icns"><FontAwesomeIcon icon={faPen} className='edit_icn' /> <FontAwesomeIcon icon={faTrash} className='del_icn' /></div>
              </div>

              <div className="category_cont">
                  <p>Crime</p> <div className="icns"><FontAwesomeIcon icon={faPen} className='edit_icn' /> <FontAwesomeIcon icon={faTrash} className='del_icn' /></div>
              </div>

              <div className="category_cont">
                  <p>Politcs</p> <div className="icns"><FontAwesomeIcon icon={faPen} className='edit_icn' /> <FontAwesomeIcon icon={faTrash} className='del_icn' /></div>
              </div>
          </div>

          <div className="addCategory">
              <h1>Add New Category</h1>

              <input onChange={(e) => setcategoryName(e.target.value)} type="text" placeholder="Enter Catgory Name" />
              <select onChange={(e) => setcategoryType(e.target.value)}>
                  <option value="default">Default</option>
                  <option value="special">Special/Temporary</option>
              </select>

              <button onClick={() => addCategoryhandler()} style={{backgroundColor: categoryName == '' || categoryType == '' ? 'grey' : ''}}>Add Category</button>

              <button onClick={() => console.log(allCategories)}>asdas</button> 
          </div>
      </div>
  </div>;
};

export default AdminNewsCategory;
