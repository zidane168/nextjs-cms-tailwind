import VButton from "./VButton";
import useTrans from "./../hooks/useTrans"

const VPagination2 = ( { page, setPage, total, limit, list }: any) => {
   
  const { language } = useTrans()  

  const goToFirstPage = () => setPage(1);
  
  const goToLastPage = () => setPage(getLastPage()); 
  
  const atFirstPage = () => page === 1;
  
  const atLastPage = () => page === getLastPage();
  
  const getLastPage = () => total ? Math.ceil(total / limit) : 0;
 

  const gotoPage = ( i: number ) => {
    setPage(i);
  }


  const displayPage = () => {
    const lastPage = getLastPage();
    const currentPage = page;

    let start = currentPage - 2;
    let end = currentPage;

    if (start > 0) {
        end = currentPage + 2; 

        let count = 0;
        while (end > lastPage) {
            count++;
            end = end - 1;
        }
        start = start - count;
    
    } else {

        let count = 0;
        while (start <= 0) {
            count++;
            start = start + 1;
        }
    
        if (count > 1) {
            start = 1;
        }
        end = currentPage + 2 + count; 
    }
    console.log("start = ", start)
    console.log("end = ", end)
    let btns = [];
    for (let i = start; i <= end; i++) {
        btns.push(<VButton active={ i === page } onClick={ () => gotoPage(i) } name={i} /> )
    }  

    return (  
        btns.map((value, index) => {
            return value
        })
    )
   
  }
  
    return ( 
        <>
            <div className="mt-2 text-center space-x-2" >
                <VButton disabled={ atFirstPage() }  onClick={ () => goToFirstPage() }  name={ language.pagination.first }  /> 
                
                { displayPage() }   

                <VButton disabled={ atLastPage() }  onClick={ () => goToLastPage() }  name={ language.pagination.last } />
            </div>  
            <div className="mt-2 text-center space-x-2" > 
                Page { page } of { total ? Math.ceil(total / limit) : 0 } / showing { list ? list.length : 0 } record(s) out of { total ? total : 0 }  total
            </div> 
        </>
    )
}

export default VPagination2
 

 