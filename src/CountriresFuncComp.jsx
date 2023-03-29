import {useState, useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import './Countries.css'

function CountriresFuncComp() {
    const {page} = useParams();
    const [countries, setCountries] = useState([]);
    const [pages, setPages] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const limit = 5;
    const offset = (page-1)*limit;
   useEffect(() => {
      fetch(`http://localhost:3001/countries?limit=${limit}&offset=${offset}`)
         .then((res) => res.json())
         .then(({data,count}) => {
            console.log(data);
            setCountries(data);
            setPages(Math.ceil(count / limit));
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, [page]);

   function changeActive(id){
    if(isActive === id){
        console.log(id);
        setIsActive(!isActive);
        return
    }
    setIsActive(id);
   }

  return (
    <div className='box'>
        {countries.map((country)=>{
            return (
                <div key={country.id} className="content">
                  <div className="row">
                    <p>{country.name}</p>
                    <span
                      className="plus_minus_btn"
                      onClick={()=>changeActive(country.id)}
                    >
                      {isActive === country.id ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={
                      isActive === country.id ? "capital_box" : ""
                    }
                  >
                    {isActive === country.id && (
                      <p className="capital_txt">{country.capital}</p>
                    )}
                  </div>
                </div>
              );
        })}
        <div className='btns'>
          {Array.from(Array(pages).keys()).map((el)=><Link to={`/countries/${el+1}`} key={el}><button className='btn'>{el+1}</button></Link>)}
        </div>
    </div>
  )
}

export default CountriresFuncComp