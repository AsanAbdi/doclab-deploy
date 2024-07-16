import Wework from '../components/Wework/index';
import Ourexperts from '../components/Ourexperts/index';
import Articles from '../components/Articles/index';

export default function expert() {
    return(
        <>

         <Ourexperts is_main={false}/> 
    
         <Articles /> 
         <Ourexperts is_main={true}/> 
    
        </>
    )
}
