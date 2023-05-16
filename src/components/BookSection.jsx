import React from 'react'

const BookSection = ({data}) => {
return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
        {data && 
        data.map((item, index)=>(
        <div className="" 
        style={{width:"200px",
        height:"350px",
        border: "1px solid white",
        borderRadius:"20px",}}> 
        <div>
        <img style={{width:"200px", 
        height:"210px",
        borderTopLeftRadius:"20px", 
        borderTopRightRadius:"20PX"}}
        className="img-fluid" 
        src={item.image} 
        alt="/" 
        />
        </div>
        <h6 style={{fontSize:"15px"}} className="px-2 my-1 text-white">
        {item.bookname.slice(0,20)}...
        </h6>
        <b style={{fontSize:"20px", color:"red"}}className="mb-2 px-2">Rs. {item.price}</b>
        <div className="d-flex justify-content-around align-items-center my-2">
        <button className="btn btn-primary" >UPDATE</button>
        <button className="btn btn-danger">DELETE</button></div>
        </div>
        ))}
    </div>
  );
};

export default BookSection;