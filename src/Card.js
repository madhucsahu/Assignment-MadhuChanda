import React ,{useState,useEffect} from 'react'

function Card() {
    const [user,setUser] = useState([]);

    const fetchData =()=>{
        fetch("https://avatars.dicebear.com/api/:sprites/:seed.svg")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let madhu = data.results
            console.log(madhu);
            setUser(madhu)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="clearfix">
        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.zipcode}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}

export default Card
