import VButton from "./VButton";
import useTrans from "./../pages/hooks/useTrans"

const VPagination2 = ( { page, setPage, total, limit } ) => {
   
  const { language } = useTrans()  

  const goToFirstPage = () => setPage(1);
  
  const goToLastPage = () => setPage(getLastPage());
  
  const incrementPage = () => page < getLastPage() && setPage(page + 1);
  
  const decrementPage = () => page > 1 && setPage(page - 1);
  
  const atFirstPage = () => page === 1;
  
  const atLastPage = () => page === getLastPage();
  
  const getLastPage = () =>total ? Math.ceil(total / limit) : 0;
  
    return ( 
        <>
             <div className="mt-2 text-center space-x-2" >
                <VButton disabled={ atFirstPage() }  onClick={ () => goToFirstPage() }  name={ language.pagination.first }  /> 

                
                <VButton disabled={ atLastPage() }  onClick={ () => goToLastPage() }  name={ language.pagination.last } />
            </div>  
        </>
    )
}

export default VPagination2
 

 