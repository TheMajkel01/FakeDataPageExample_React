import { useState } from 'react'
import './App.css'

const Zadanie = () => {
    const dane = [
        {
            "id": 8621,
            "uid": "112c0859-343a-44a5-a2b4-5db4b1139864",
            "brand": "Amstel",
            "name": "Weihenstephaner Hefeweissbier",
            "style": "Sour Ale",
            "hop": "Amarillo",
            "yeast": "3711 - French Saison",
            "malts": "Carapils",
            "ibu": "68 IBU",
            "alcohol": "2.5%",
            "blg": "7.9°Blg"
          },
          {
            "id": 4374,
            "uid": "1dc73e15-fec7-4088-a189-33829ff70e90",
            "brand": "Budweiser",
            "name": "Celebrator Doppelbock",
            "style": "Vegetable Beer",
            "hop": "Vanguard",
            "yeast": "1056 - American Ale",
            "malts": "Caramel",
            "ibu": "53 IBU",
            "alcohol": "3.9%",
            "blg": "8.4°Blg"
          },
          {
            "id": 731,
            "uid": "3c808381-bfa1-4b4c-b0fc-5ea5664770f9",
            "brand": "Becks",
            "name": "Schneider Aventinus",
            "style": "Vegetable Beer",
            "hop": "Golding",
            "yeast": "5526 - Brettanomyces lambicus",
            "malts": "Chocolate malt",
            "ibu": "57 IBU",
            "alcohol": "5.8%",
            "blg": "10.7°Blg"
          },
          {
            "id": 4235,
            "uid": "8dde62ae-ab63-4d33-aca4-67c9d12d1ba9",
            "brand": "BudLight",
            "name": "Westmalle Trappist Tripel",
            "style": "Light Hybrid Beer",
            "hop": "Simcoe",
            "yeast": "2000 - Budvar Lager",
            "malts": "Black malt",
            "ibu": "42 IBU",
            "alcohol": "3.5%",
            "blg": "14.1°Blg"
          },
          {
            "id": 6248,
            "uid": "5000c75b-d9a9-4d82-91d4-c480a11dc325",
            "brand": "Amstel",
            "name": "Shakespeare Oatmeal",
            "style": "Stout",
            "hop": "Mt. Hood",
            "yeast": "2633 - Octoberfest Lager Blend",
            "malts": "Chocolate malt",
            "ibu": "18 IBU",
            "alcohol": "3.0%",
            "blg": "18.0°Blg"
          }
    ]
    
    const [currId, setCurrId] = useState(0);

    
    var listContent = [];
    for(let i=0; i<dane.length; i++)
    {
      if(i == currId)
      {
        listContent[i] = <li className="list-group-item selected">{dane[i].style}</li>;
      }
      else{
        listContent[i] = <li className="list-group-item item">{dane[i].style}</li>;
      }
    }

    return(
        <div className="container">
            <h1>ZADANIE</h1>
            <label className="form-label">Name</label>
            <select className="form-select" onChange={e => setCurrId(e.target.value)}>
              {dane.map((item, index) => <option key={index} value={index}>{item.name}</option>)}
            </select>

            <label className="form-label">Alcohol</label>
            <p>
              {dane[currId].alcohol}
            </p>

            <hr></hr>

            <div className="form-group">
              <label className="form-label">Styles</label>
              <ul className="list-group">
                {listContent}
              </ul>
            </div>
        </div>
    )
}

export default Zadanie;