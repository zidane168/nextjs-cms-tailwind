import VButton from "./VButton";
import useTrans from "./../hooks/useTrans"

const VPagination = ( { page, setPage, total, limit, list }: any ) => {
   
  const { language } = useTrans()  

  const goToFirstPage = () => setPage(1);
  
  const goToLastPage = () => setPage(getLastPage());
  
  const incrementPage = () => page < getLastPage() && setPage(page + 1);
  
  const decrementPage = () => page > 1 && setPage(page - 1);
  
  const atFirstPage = () => page === 1;
  
  const atLastPage = () => page === getLastPage();
  
  const getLastPage = () => total ? Math.ceil(total / limit) : 0;
  
    return ( 
        <>
            <div className="mt-2 text-center space-x-2" >
                <VButton disabled={ atFirstPage() }  onClick={ () => goToFirstPage() }  name={ language.pagination.first }  />
                <VButton disabled={ atFirstPage() }  onClick={ () => decrementPage() }  name={ language.pagination.previous }/>
                <VButton disabled={ atLastPage() }  onClick={ () => incrementPage() }  name={ language.pagination.next } />
                <VButton disabled={ atLastPage() }  onClick={ () => goToLastPage() }  name={ language.pagination.last } />
            </div>  
            <div className="mt-2 text-center space-x-2" > 
                Page { page } of { total ? Math.ceil(total / limit) : 0 } / showing { list ? list.length : 0 } record(s) out of { total ? total : 0 }  total
            </div> 
        </>
    )
}

export default VPagination
 

 