import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Recipe() {
    const REACT_APP_API_KEY = "df21a51cf94e4bb7be5b57e89e27dc90";
    let params= useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");


    const fetchDetails = async () => {
 
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
       };

       useEffect(() =>{
        fetchDetails();
    }, [params.name]);

  return <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button 
            className={activeTab === "instructions" ? "active" : ""} 
            onClick={()=> setActiveTab("instuctions")}>Instructions</Button>
            
            <Button
            className={activeTab === "ingredients" ? "active" : ""} 
            onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>

            {activeTab === "instructions" && (
                <div>
                 <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                 <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </div>
            )};

            {activeTab === "ingredients" && (
                <ul>
                    {details.extendedIngredients.map((ingredient) =>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
            )};
        </Info>
        
    </DetailWrapper>
    
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
.active{
    background: linear-gradient(35deg, rgb(120, 72, 5), rgb(55, 33, 2));
    color: white;
}
h2{
    margin-bottom: 2rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
`;

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
border-radius: 45%;
margin-right: 2rem;
font-weight:600;

`;

const Info = styled.div`
margin-left: 10rem;
`;

export default Recipe;