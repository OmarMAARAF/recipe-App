import React from "react";
//import style from "./recipes.module.css"
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";

export default function Recipes({ title, img }) {
  return (
    /*  <div className={style.recipe}>
              <h3 >{title}</h3>
              <img className={style.image} src={img} alt={img}/>
          </div>*/
    <Card className="mb-5 bg-white shadow-md rounded-lg p-4 focus:shadow-lg  " >
      <CardImg
        top
        width="50%"
        src={img}
        alt="Card image cap"
        className="w-[350px] h-[350px] rounded-lg flex justify-center items-center"
      />
      <CardBody>
        <CardTitle tag="h5" className="w-[350px] text-center mt-2">
          {title}
        </CardTitle>
      </CardBody>
    </Card>
  );
}
