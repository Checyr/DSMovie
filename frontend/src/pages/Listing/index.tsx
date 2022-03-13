import './style.css';
import MovieScore from 'components/MovieScore';
import Pagination from "components/Pagination";
import MovieCard from 'components/MovieCard';

function Listing(){
    return(
        <>
                <Pagination/>

                <div className='row'>
                    <div className='col-sm-6 col-lg-3 col-xl-3'>
                            <MovieCard/>
                    </div>
                    <div className='col-sm-6 col-lg-3 col-xl-3'>
                            <MovieCard/>
                    </div>
                    <div className='col-sm-6 col-lg-3 col-xl-3'>
                            <MovieCard/>
                    </div>
                    <div className='col-sm-6 col-lg-3 col-xl-3'>
                            <MovieCard/>
                    </div>
                </div>

        </>

    );
}

export default Listing;