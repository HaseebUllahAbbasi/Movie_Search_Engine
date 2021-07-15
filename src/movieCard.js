import React, {  useState } from "react";
import Youtube from "react-youtube"


export default function MovieCard({movie,movie_id}){
    const [trailerBool,setTrailer] = useState(false);
    const [url_trailer,setUrl] = useState("");
    const opts = {
        height: '240',
        width: '240',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handle_click = async ()=>
   { 
       fetch(`https://api.themoviedb.org/3/movie/${movie_id}}/videos?api_key=66ab391092a1de38b5f8e93d9fd8019f&append_to_response=videos`)
        .then(data => data.json()).then(json_data => setUrl(json_data.results[0].key));
       setTrailer(true);
   }
//    useEffect(function(){
   
//     },[trailerBool])
    return (

         <div className="card" >

            <div className="container-fluid">
                <div className="row">
                <div className="col">
                <img className="card--image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster'}
                    />
                </div>

                </div>
            </div>
            
            <div className="card--content">
            <h3 className="card--title text-center">{movie.title}</h3>
            <p className="text-center"><small>RELEASE DATE: {movie.release_date}</small></p>
            <p className="text-center"><small>RATING: {movie.vote_average}</small></p>
            <p className="card-desc ">{movie.overview}</p>
            </div>
            <div className="container text-center">
                <div className="row">
                    {
                       (trailerBool === false) ? <div className="col-md-6 offset-md-3">
                      <button onClick={handle_click} className="btn btn-primary btn-block">
                        Play Trailer

                    </button>  
                    </div>
                    
                      : <div className="col" id="col-custom"  >   <Youtube videoId={url_trailer}></Youtube> </div>  
                   }
                </div>    
            </div>

        </div>
    )
}