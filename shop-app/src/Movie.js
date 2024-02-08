import { useState } from "react";
import { Counter } from "./Counter";
import { Card, IconButton } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
//import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export function Movie({movieTake}){
    console.log(movieTake)

    const ratingStyles = {
        color: movieTake.rating >= 8 ?"green":"red"
    }
    const [show,setShow]=useState(true);
    return(
        <Card className="movie-container">
            <img className="movie-poster" src={movieTake.poster} />
            <CardContent>
            <div className="movie-spec">
                <h2 className="movie-name">{movieTake.name}
                
                 <IconButton color="primary"  aria-label="Toggle-Description" onClick={() => setShow(!show)} >
                 {show ? <ExpandLessIcon fontSize="large"/>:<ExpandMoreIcon fontSize="large" />}
                  </IconButton>

                  <IconButton color = "primary" aria-label="Movie-Info">
                    <InfoIcon fontSize="medium"/>
                  </IconButton>
                  </h2>



                <h3 style ={ratingStyles} className="movie-rating">🌟{movieTake.rating}</h3>
            </div>
            </CardContent>

            {/* <button onClick={()=> setShow(!show)}>
                Toggle Description - {show + ""}
            </button> */}



            {show? <p className="movie-summary">{movieTake.summary}</p> :null}
            <CardActions>
            <Counter />
            </CardActions>
        </Card>
    )
}